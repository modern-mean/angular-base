import { Routes } from '@angular/router';
import { HeaderConfigPartial } from '../header/header.component';

import { HomeComponent } from './home.component';

const headerconf: HeaderConfigPartial = {
  title: 'Home'
};

export const HomeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      header: headerconf,
      navigation: {
        display: 'Home',
        icon: 'home'
      }
    }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
