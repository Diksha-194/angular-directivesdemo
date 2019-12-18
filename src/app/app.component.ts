import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  showParagraph : boolean =true;

  hide() {
    this.showParagraph = false;
  }
  show() {
    this.showParagraph = true;
  }


  carnames: object[] = [
    {
      cars: 'Audi'
    },
    {
      cars: 'BMW'
    },
    {
      cars: 'Aston Martin'
    }
  ];

  blueColor: boolean = false;  
   blue() {
    this.blueColor = true;
    
  }
}
