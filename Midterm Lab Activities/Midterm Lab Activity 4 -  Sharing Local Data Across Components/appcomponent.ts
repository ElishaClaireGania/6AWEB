import { Component } from '@angular/core';
import { Employee } from '../employee';
import { Product } from '../product';

@Component({
  selector: 'app-appcomponent',
  imports: [],
  templateUrl: './appcomponent.html',
  styleUrl: './appcomponent.css',
})
export class Appcomponent {
  title = 'services-demo';
  public employees: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  } [] = [];

  public products: {
    id: string;
    productname: string;
    description: string;
    price: number;
  } [] = [];

  constructor(private _employeeService:Employee, private _productService:Product){}

  ngOnInit(){
    this.employees = this._employeeService.getEmployees()
    this.products = this._productService.getProducts();
  }

}
