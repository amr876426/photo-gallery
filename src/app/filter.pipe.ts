import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, criteria: string): any {
    if (criteria == 'all') {
      return value
    } else {
      return value.filter(value => {
        return value.category == criteria;
      })
    }
  }



}
