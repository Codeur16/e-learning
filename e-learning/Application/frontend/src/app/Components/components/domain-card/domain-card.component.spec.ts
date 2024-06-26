import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainCardComponent } from './domain-card.component';

describe('DomainCardComponent', () => {
  let component: DomainCardComponent;
  let fixture: ComponentFixture<DomainCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DomainCardComponent]
    });
    fixture = TestBed.createComponent(DomainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
