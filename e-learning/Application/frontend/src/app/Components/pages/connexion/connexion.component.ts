import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent {

  constructor(
    private _router: Router
  ) { }

  // toggle visibility icon on password variable
  showPassword = true;

  /**
   * Toggle visibility password
   */
  toggle_visibility_password() {
    this.showPassword = !this.showPassword;
  }

  connexion() {
    this._router.navigateByUrl('/user/home/dashboard');
  }

}
