import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCountryDetailsShow]'
})
export class CountryDetailsShowDirective {

  constructor(private _el: ElementRef, private _renderer: Renderer2) { 
  }
}
