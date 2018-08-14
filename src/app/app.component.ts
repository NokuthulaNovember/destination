import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Marbela Hotel';

  username:string;
  ngUname:string;

  display():void{
      this.username="Welcome "+this.ngUname+"to The Marbela Hotel";
  }
}

