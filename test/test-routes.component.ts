import { Routes } from '@angular/router';
import { HeaderConfigPartial } from '../header/header.component';

import { TestComponent } from './test.component';

const testconf: HeaderConfigPartial = {
  title: 'Test',
  titleShow: false,
  rightButtonIcon: 'menu'
};

export const TestRoutes: Routes = [
  {
    path: 'test',
    data: {
      header: testconf,
      navigation: {
        display: 'Test'
      }
    },
    children: [
      {
        path: 'ok',
        component: TestComponent,
         data: {
          header: testconf,
          navigation: {
            display: 'Test CHild'
          }
        }
      },
      { path: '', pathMatch: 'full', redirectTo: 'ok' }
    ]
  }
];
