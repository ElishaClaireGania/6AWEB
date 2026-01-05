import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-join',
  imports: [FormsModule],
  templateUrl: './join.html',
  styleUrl: './join.css',
})
export class Join {
   // text binding
  title = 'Join Our Mailing List'
  message = 'Join and meet thousands academicians around the globe and stay updated!'
  cta_message = 'Click here to JOIN!'

  // two-way binding
  firstName = ''
  lastName = ''
  emailAdd = ''
  institution = ''
}
