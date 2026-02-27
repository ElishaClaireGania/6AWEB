import { Routes } from '@angular/router';
import { Register } from './register/register';
import { CourseFeedbackComponent } from './course-feedback-component/course-feedback-component';

export const routes: Routes = [
  { path: 'register-form', component: Register },
  { path: 'coursefeedback', component: CourseFeedbackComponent },
  { path: '', redirectTo: '/register-form', pathMatch: 'full' }
];

