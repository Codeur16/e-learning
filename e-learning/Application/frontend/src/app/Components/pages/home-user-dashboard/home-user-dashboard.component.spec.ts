import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUserDashboardComponent } from './home-user-dashboard.component';

describe('HomeUserDashboardComponent', () => {
  let component: HomeUserDashboardComponent;
  let fixture: ComponentFixture<HomeUserDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeUserDashboardComponent]
    });
    fixture = TestBed.createComponent(HomeUserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
