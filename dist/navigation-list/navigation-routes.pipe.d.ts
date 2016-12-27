import { PipeTransform } from '@angular/core';
import { Routes } from '@angular/router';
export declare class NavigationRoutesPipe implements PipeTransform {
    transform(routes: Routes, args?: any): Routes;
}
