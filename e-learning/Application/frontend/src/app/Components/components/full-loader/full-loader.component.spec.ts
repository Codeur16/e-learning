import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLoaderComponent } from './full-loader.component';

describe('FullLoaderComponent', () => {
  let component: FullLoaderComponent;
  let fixture: ComponentFixture<FullLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullLoaderComponent]
    });
    fixture = TestBed.createComponent(FullLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
