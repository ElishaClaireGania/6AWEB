import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About} from './about/about';
import { Partner } from './partner/partner';
import { Join } from './join/join';

export const routes: Routes = [
  {
    path: '', component: Home
  },
  {
    path: 'about', component: About
  },
  {
    path: 'partner', component: Partner
  },{
    path: 'join', component: Join
  },

];
