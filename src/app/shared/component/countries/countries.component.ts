import { Component, OnInit } from '@angular/core';
import { ICountry } from '../../module/interface';
import { CountryDetailsService } from '../../service/country-details.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countriesArr: Array<ICountry> = this._countriesDetailsService.countryArr;
  constructor(private _countriesDetailsService: CountryDetailsService) { }

  ngOnInit(): void {
  }
}
