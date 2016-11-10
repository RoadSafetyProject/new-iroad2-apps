import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pages'
})
export class PagesPipe implements PipeTransform {

  transform(pageSize?: any, total?: any): any {
    var array = [];
    for(let i = 1;i <= Math.ceil(total/pageSize);i++){
      array.push(i);
    }
    return array;
  }

}
