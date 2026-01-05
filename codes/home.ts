import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // text binding
  title = 'RESEARCH CONFERENCES'
  message = 'Join our online live this 2026!'
  cta_message = 'Join our Research Conferences Around the World!'


}
