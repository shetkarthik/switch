import { Component } from '@angular/core';
import { AComponent } from './a/a.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'switch';

  select:boolean = false;
  select1:boolean = false;
  select2:boolean = false;
  select3:boolean = false;
  productsList:any;
  optionSelected:any;

  sortParam:any;
  sortDirection:any;

  onOptionsSelected(event: any){
    console.log(event.target.value);

    this.optionSelected = event.target.value;

    if(this.optionSelected === 'lth')
    {
      // this.select = true;
      // this.select2 = false;
      // this.select3 = false;
      // this.select1 = false;
    }
    else if(this.optionSelected === 'htl'){
      // this.select1 = true;
      // this.select2 = false;
      // this.select3 = false;
      // this.select = false;
    }
    else if(this.optionSelected === 'nasc'){
      // this.select2 = true;
      // this.select = false;
      // this.select3 = false;
      // this.select1 = false;
    }
    else if(this.optionSelected === 'ndesc'){
      // this.select3 = true;
      // this.select = false;
      // this.select2 = false;
      // this.select1 = false;
    }
}
}
