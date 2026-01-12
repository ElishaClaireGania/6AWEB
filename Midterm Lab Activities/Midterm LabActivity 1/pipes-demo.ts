import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable, of } from 'rxjs';

@Component({
  selector: 'app-pipes-demo',
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, SlicePipe, DecimalPipe, AsyncPipe, JsonPipe, PercentPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  presentDate = new Date();
  name = 'Gania, Elisha Claire A.';
  price = 20000;
  Fruits = ['Apple', 'Orange', 'Grapes', 'Mango', 'Kiwi', 'Pomegranate'];
  decimalNum1 = 8.7589623;
  decimalNum2 = 5.43;
  // currentTime$ = interval(1000).pipe(map(() => new Date));
  status$: Observable<string> = of('Online');
  userObject = { id: 101, name2: 'Elisha Claire Gania', role: 'Admin' };
  percentageVal = 0.7562;

}
