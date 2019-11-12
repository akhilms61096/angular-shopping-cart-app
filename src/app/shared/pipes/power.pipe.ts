import { Pipe, PipeTransform } from '@angular/core';

// {{ 2 | power: 3}}
// {{ 2 | power }} - default 2^1 [1 to be default]

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(m: number, n: number = 1): number {
    return Math.pow(m,n);
  }

}
