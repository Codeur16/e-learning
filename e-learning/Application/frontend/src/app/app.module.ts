import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NotifierModule } from 'angular-notifier';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AddItineraireComponent } from './Components/dialogs/add-itineraire/add-itineraire.component';
import { DeleteComponent } from './Components/dialogs/delete/delete.component';
import { ErrorStateMatcher } from '@angular/material/core';
import { MyErrorStateMatcher } from './Components/Utils/MyErroStateMatcher';
import { FullLoaderComponent } from './Components/components/full-loader/full-loader.component';
import { DatePipe } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { NavbarComponent } from './Components/components/navbar/navbar.component';
import { FooterComponent } from './Components/components/footer/footer.component';
import { MatDividerModule } from '@angular/material/divider';
import { HomeComponent } from './Components/pages/home/home.component';
import { InscriptionComponent } from './Components/pages/inscription/inscription.component';
import { ConnexionComponent } from './Components/pages/connexion/connexion.component';
import { DomainCardComponent } from './Components/components/domain-card/domain-card.component';
import { CourseCardComponent } from './Components/components/course-card/course-card.component';
import { HomeUserComponent } from './Components/pages/home-user/home-user.component';
import { CustomAlertComponent } from './Components/components/custom-alert/custom-alert.component';
import { CoursComponent } from './Components/pages/cours/cours.component';
import { HomeUserDashboardComponent } from './Components/pages/home-user-dashboard/home-user-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddItineraireComponent,
    DeleteComponent,
    FullLoaderComponent,
    NavbarComponent,
    FooterComponent,
    InscriptionComponent,
    ConnexionComponent,
    DomainCardComponent,
    CourseCardComponent,
    HomeUserComponent,
    CustomAlertComponent,
    CoursComponent,
    HomeUserDashboardComponent
  ],
  imports: [
    MatDividerModule,
    MatTabsModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    NgxScrollTopModule,
    MatSliderModule,
    MatRadioModule,
    MatCheckboxModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatMenuModule,
    MatSelectModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right'
        }
      }, animations: {
        show: {
          speed: 300
        }
      }
    }),
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: MyErrorStateMatcher },
    { provide: DatePipe }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
