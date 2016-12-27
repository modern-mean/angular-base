import { Routes } from '@angular/router';
import { HomeRoutes } from './home/home-routes.component';
import { TestRoutes } from './test/test-routes.component';


export const AllRoutes: Routes = [...TestRoutes, ...HomeRoutes];
