import { HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Site } from 'src/app/Models/site.interface';
import { Ville } from 'src/app/Models/ville.interface';
import { LoaderService } from 'src/app/Services/Loader/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private _notifierService: NotifierService,
    protected _loaderService: LoaderService,
    private _router: Router,
    private _matDialog: MatDialog,
  ) { }

  // Matcher
  matcher = new ErrorStateMatcher();

  ngOnInit() {

  }

}
