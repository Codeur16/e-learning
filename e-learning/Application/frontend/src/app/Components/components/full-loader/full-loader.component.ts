import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-full-loader',
  templateUrl: './full-loader.component.html',
  styleUrls: ['./full-loader.component.css']
})
export class FullLoaderComponent {
  @Input() isLoading!: boolean;
}
