import { Routes } from '@angular/router';
import { App } from './app';
import { About } from './components/pages/about/about';
import { Coaches } from './components/pages/coaches/coaches';
import { Fighters } from './components/pages/fighters/fighters';
import { Gallery } from './components/pages/gallery/gallery';
import { Membership } from './components/pages/membership/membership';
import { Events } from './components/pages/events/events';
import { Program } from './components/pages/program/program';
import { Tribute } from './components/pages/tribute/tribute';
import { ContactUs } from './components/pages/contact-us/contact-us';
import { Home } from './components/pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  {
    path: 'coaches',
    component: Coaches,
  },
  { path: 'fighters', component: Fighters },
  {
    path: 'gallery',
    component: Gallery,
  },
  {
    path: 'membership',
    component: Membership,
  },
  {
    path: 'events',
    component: Events,
  },
  {
    path: 'program',
    component: Program,
  },
  {
    path: 'tribute',
    component: Tribute,
  },
  { path: 'contactUs', component: ContactUs },
];
