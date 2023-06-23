import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/user/login/login.component';
import { SignUpComponent } from './component/user/sign-up/sign-up.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AuthInterceptor } from './shared/service/auth.intercept';
import { ProfileComponent } from './component/user/profile/profile.component';
import { CountryComponent } from './shared/component/countries/country/country.component';
import { CountriesComponent } from './shared/component/countries/countries.component';
import { CountryDetailsShowDirective } from './shared/directive/country-details-show.directive';
import { HeroImgComponent } from './component/hero-img/hero-img.component';
import { TestComponent } from './component/test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ProfileComponent,
    CountryComponent,
    CountriesComponent,
    CountryDetailsShowDirective,
    HeroImgComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
