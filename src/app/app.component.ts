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
blueColor: boolean = false;  
   blue() {
    this.blueColor = true;    
  }


  users: object[] = [
    {
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz', 
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771'
      },     
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org'
    },
    {
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771'
      },  
      phone: '010-692-6593 x09125',
      website: 'anastasia.net'
    },
    {
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',  
      address: {
        street: 'Douglas Extension',
        suite: 'Suite 847',
        city: 'McKenziehaven',
        zipcode: '59590-4157'
      },     
      phone: '1-463-123-4447',
      website: 'ramiro.info'
    },
    {
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      address: {
        street: 'Hoeger Mall',
        suite: 'Apt. 692',
        city: 'South Elvis',
        zipcode: '53919-4257'
      },      
      phone: '493-170-9623 x156',
      website: 'kale.biz'
    },    
    {
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',  
      address: {
        street: 'Skiles Walks',
        suite: 'Suite 351',
        city: 'Roscoeview',
        zipcode: '33263'
      },    
      phone: '(254)954-1289',
      website: 'demarco.info',
    }
       
  ];

  
}
