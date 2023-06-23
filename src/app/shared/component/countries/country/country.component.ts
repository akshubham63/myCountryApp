import { Component, Input, OnInit } from '@angular/core';
import { ICountry } from 'src/app/shared/modle/interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  @Input() countryObj!: ICountry;
  constructor() { }

  ngOnInit(): void {
  }
}
