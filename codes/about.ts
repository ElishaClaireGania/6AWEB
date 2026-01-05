import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [FormsModule, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  // text binding
  title = 'About the Organization'
  cta_message = 'Learn More'


  // event binding
 count = 0;
 showCustomAlert = false;

  claimGift() {
    this.count += 100;
    this.showCustomAlert = true;
  }

  closeAlert() {
    this.showCustomAlert = false;
  }
}
