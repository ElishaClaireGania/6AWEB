import { Myservice } from './../myservice';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-cmp',
  standalone: true,
  imports: [],
  templateUrl: './new-cmp.html',
  styleUrls: ['./new-cmp.css'],
})
export class NewCmp {
    todaydate: Date;
    newcomponent = 'Entered in new component!'
    componentproperty;
      constructor(private myservice:Myservice){
      this.todaydate = this.myservice.showTodayDate();
      this.myservice.serviceproperty = 'Component Created';
      this.componentproperty = this.myservice.serviceproperty
    }
  }


