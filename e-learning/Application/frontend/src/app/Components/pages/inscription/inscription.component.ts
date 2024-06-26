import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {

  // toggle visibility icon on password variable
  showPassword = false;

  /**
   * Toggle visibility password
   */
  toggle_visibility_password() {
    this.showPassword = !this.showPassword;
  }



}
