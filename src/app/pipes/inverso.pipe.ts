import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inverso'
})
export class InversoPipe implements PipeTransform {

  transform(value: any): String {
    if(!value) return ''
    return value.split(" ").reverse().join(" ");
  }

}
