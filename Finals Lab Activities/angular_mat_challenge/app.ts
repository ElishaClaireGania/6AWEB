import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Register } from './register/register';
import { CourseFeedbackComponent } from './course-feedback-component/course-feedback-component';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Register, CourseFeedbackComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularMaterial');
}
