import { Component, OnInit } from '@angular/core';
import { ICountry } from '../../modle/interface';
import { CountryDataService } from '../../service/countryArr.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countriesArr: Array<ICountry> = this._countriesService.countryArr;
  constructor(private _countriesService: CountryDataService) { }

  ngOnInit(): void {
  }

}
