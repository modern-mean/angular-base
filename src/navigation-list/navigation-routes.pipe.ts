import { Pipe, PipeTransform } from '@angular/core';
import { Routes } from '@angular/router';
import { NavigationRoute } from './navigation-list.component';

@Pipe({
  name: 'navigationRoutes'
})
export class NavigationRoutesPipe implements PipeTransform {

  transform(routes: Routes, args?: any): Routes {
    return routes && routes.length > 0 ? routes.filter((route: NavigationRoute) => (route.data && route.data.navigation)) : [];
  }

}
