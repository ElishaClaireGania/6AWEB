import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})

export class DataBinding {
  // Text Binding
  message = 'DATA BINDING DEMONSTRATION!'
  title = 'Angular Data-Binding Project'
  description = 'This is my first data binding Angular.js app.'

  // Property Binding
  imgURL = 'https://cdn.britannica.com/49/236049-050-AEEBDD63/Dalmation-dog-brown-and-white.jpg' ;
  w = 450;
  h = 450;
  altText = 'Dalmatian';
  textColor = 'purple';

  // Class Binding
  isHighlighted = true

  // Two-way Binding
  yourName = ''

  // Event Binding
  count = 0
  increment ()
  {
    this.count++;
  }
  decrement (){
    this.count--;
  }
}

