import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-domain-card',
  templateUrl: './domain-card.component.html',
  styleUrls: ['./domain-card.component.css']
})
export class DomainCardComponent {
  @Input() domain!: string | null;
}
