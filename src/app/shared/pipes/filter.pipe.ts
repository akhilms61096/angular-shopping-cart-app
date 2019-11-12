import { Pipe, PipeTransform } from '@angular/core';

// products | filter:'price'":gt":200

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], propertyName: string, condition: string, value: any): any {
    if(!items || !propertyName || !condition || !value) { // no filter applied
      return items;
    } 

    //gt
    if(condition === 'gt') {
      return items.filter (items => items[propertyName] > value);
    }
    
    return items;
  }

}
