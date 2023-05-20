import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { UserComponent } from './component/user/user.component';
import { LoginComponent } from './component/user/login/login.component';
import { SignUpComponent } from './component/user/sign-up/sign-up.component';
import { CountriesComponent } from './shared/component/countries/countries.component';
import { CountryComponent } from './shared/component/countries/country/country.component';
import { CountryDetailsShowDirective } from './shared/directives/country-details-show.directive';
import { environment } from 'src/environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/service/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent,
    UserComponent,
    LoginComponent,
    SignUpComponent,
    CountriesComponent,
    CountryComponent,
    CountryDetailsShowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
