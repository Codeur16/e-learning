import { Component } from '@angular/core';
import { LoaderService } from './Services/Loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CamerExpress';
  constructor(
    protected _loaderService: LoaderService
  ) { }



  ngOnInit() {
  }
}
