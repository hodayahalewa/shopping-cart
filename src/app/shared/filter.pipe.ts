import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(product: any[], filterString:string,propName:string): any[] {
    const result:any=[];
    if(!product|| filterString===''||propName===''){
      return product;
    }
   product.forEach((a:any)=>{
    if(a[propName].trim().toLowerCase().includes(filterString.toLocaleLowerCase()))
{
  result.push(a);
}   })
return result;
  }

}
