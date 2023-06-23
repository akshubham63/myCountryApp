import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Currency, ICountry } from 'src/app/shared/modle/interface';
import { CountryDataService } from 'src/app/shared/service/countryArr.service';

@Component({
  selector: 'app-hero-img',
  templateUrl: './hero-img.component.html',
  styleUrls: ['./hero-img.component.scss']
})
export class HeroImgComponent implements OnInit {

  sortedCountryArr!: Array<ICountry>;
  constructor( private _countryService: CountryDataService) { }

  ngOnInit(): void {
  }

  

  onSearch(event: KeyboardEvent){
    
  }

}
