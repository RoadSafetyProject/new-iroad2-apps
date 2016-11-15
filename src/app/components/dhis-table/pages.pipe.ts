import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pages'
})
export class PagesPipe implements PipeTransform {

  transform(pageCount?: any): any {
    var array = [];
    for(let i = 1;i <= pageCount;i++){
      array.push(i);
    }
    return array;
  }

}
