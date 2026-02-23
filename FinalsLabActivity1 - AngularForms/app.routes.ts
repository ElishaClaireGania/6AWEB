import { Routes } from '@angular/router';
import { TemplateDemo } from './template-demo/template-demo';
import { ReactiveDemo } from './reactive-demo/reactive-demo';


export const routes: Routes = [
  { path: 'template-form', component: TemplateDemo },
  { path: 'reactive-form', component: ReactiveDemo },
  { path: '', redirectTo: '/template-form', pathMatch: 'full' }
];
