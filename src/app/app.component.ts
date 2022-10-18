import { Component } from '@angular/core';
import { AComponent } from './a/a.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'switch';

  number:any = 1;
  total:any = 1;

  price:number = 100;
 
  productsList:any;
  optionSelected:any;

  sortParam:any;
  sortDirection:any;

  onOptionsSelected(event: any){
    console.log(event.target.value);

    this.optionSelected = event.target.value;
}
  onChange(event: any){
    console.log(event.target.value);

    this.number = event.target.value;

    this.total = this.price * this.number;
}

}
