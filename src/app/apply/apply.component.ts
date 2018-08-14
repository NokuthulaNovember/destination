import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {


  selectedbooking="hotel";
  g:string;
  b:string;
  b1:string;
  b2:string;

  Myname:string;
  ngname:string;
  ngSname :string;

  display():void{
    this. Myname="Welcome to" + this.ngname + this.ngSname +" booking apps";
}


  gender = ['male', 'female'];
  booking = ['hotel', 'bus','computer'];
  bus1= ['Daveyton', 'Benoni','Boksburg'];
  bus2 = ['Brakpan', 'Wattvile','Petit'];
 
 

  constructor( ) {}

  ngOnInit() {
  }

}
