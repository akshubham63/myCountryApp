import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import { CountryDataService } from 'src/app/shared/service/countryArr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _authService: AuthService,
    private _countryService: CountryDataService) { }

  ngOnInit(): void {
  }

}
