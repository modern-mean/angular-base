import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'navigationRoute'
})
export class NavigationRoutePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
