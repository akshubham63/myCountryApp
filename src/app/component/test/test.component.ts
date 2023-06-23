import { HttpClient } from '@angular/common/http';
import { Component, OnInit, DoCheck, NgZone } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, DoCheck {
  private cdCount: number = 0;
  constructor(private _http: HttpClient, private _ngZone: NgZone) { }

  onAsyncTask(){
    console.log('Do something triggered!!!');
    this._ngZone.runOutsideAngular(() => {
      this.getPostApi().subscribe(data => console.log('Data arrived'));
      this._ngZone.run(() => console.log('The class field or ui updated !!!'));
    });
  }
  
  ngDoCheck(){
    console.log('do check' + this.cdCount++);
    
  }
  
  getPostApi(){
    return this._http.get('https://jsonplaceholder.typicode.com/posts');
  }

  ngOnInit(): void {
  }

}
