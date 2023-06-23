import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./component/home/home.component";
import { LoginComponent } from "./component/user/login/login.component";
import { SignUpComponent } from "./component/user/sign-up/sign-up.component";
import { AuthGuard } from "./guards/auth.guard";
import { PageNotFoundComponent } from "./component/page-not-found/page-not-found.component";
import { CountriesComponent } from "./shared/component/countries/countries.component";
import { TestComponent } from "./component/test/test.component";

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
    {path: 'countries', component: CountriesComponent, canActivate:[AuthGuard]},
    {path: 'login', component: LoginComponent, children: [
    ]},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'test', component: TestComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}