import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItineraireComponent } from './add-itineraire.component';

describe('AddItineraireComponent', () => {
  let component: AddItineraireComponent;
  let fixture: ComponentFixture<AddItineraireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddItineraireComponent]
    });
    fixture = TestBed.createComponent(AddItineraireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
