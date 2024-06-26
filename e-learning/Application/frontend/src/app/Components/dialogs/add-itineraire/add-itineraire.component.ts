import { Component, Inject, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
} from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Itineraire } from 'src/app/Models/itineraire.interface';
import { Ville } from 'src/app/Models/ville.interface';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-add-itineraire',
  templateUrl: './add-itineraire.component.html',
  styleUrls: ['./add-itineraire.component.css']
})
export class AddItineraireComponent implements OnInit {

  mode!: string;
  itineraire!: Itineraire;
  villes!: Ville[];
  villeDepart!: Ville;
  villeDestination!: Ville;
  otherData = {
    prixClassique: 3500, // 3500 min
    prixVip: 3500, // 3500 min
    duree: 1 // 1h min
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dialogRef: MatDialogRef<AddItineraireComponent>
  ) {
    this.mode = this.data.mode;
    this.itineraire = this.data.element;
    this.villes = this.data.villes;
    this.villeDepart = this.data.villeDepart;
    this.villeDestination = this.data.villeDestination;
    this.otherData.duree = this.data.duree;
    this.otherData.prixClassique = this.data.prixClassique,
      this.otherData.prixVip = this.data.prixVip

    console.log(data);

  }

  // Matcher
  matcher = new ErrorStateMatcher();

  // error message
  destinationEqualDepart = false;

  // Form control -----------------------------------------------
  prixClassiqueFormControl = new FormControl('', [Validators.required, Validators.min(3500)]);
  prixVipFormControl = new FormControl('', [Validators.required, Validators.min(3500)]);
  dureeFormControl = new FormControl('', [Validators.required, Validators.min(1)]);
  villeDestinationFormControl = new FormControl('', [Validators.required]);

  valid() {
    if (this.villeDestination.id !== undefined && this.prixClassiqueFormControl.valid && this.prixVipFormControl.valid && this.dureeFormControl.valid) {
      let v: Ville | undefined = this.villes.find((ville) => { return ville.id == this.villeDestination.id });
      if (v != undefined) {

        if (v.id != this.villeDepart.id) {
          // hide error
          this.destinationEqualDepart = false;

          // set ville name
          this.villeDestination.nom = v.nom;

          let result = {
            villeDestination: this.villeDestination,
            prixClassique: this.otherData.prixClassique,
            prixVip: this.otherData.prixVip,
            duree: this.otherData.duree
          };

          // close with param
          this._dialogRef.close(result);

        } else {
          this.destinationEqualDepart = true;
        }
      } else {
      }

    }
  }

  ngOnInit(): void {

    // console.log(this.villeDestination);

    // if (this.itineraire.id != undefined) {
    //   this.VilleDestination = this.itineraire.villeDestination;
    // }
    // console.log(this.VilleDestination);

  }

}
