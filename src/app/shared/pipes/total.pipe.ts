import { Pipe, PipeTransform } from '@angular/core';

//decorator
@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  // any means here our variable val could have any datatype it could be boolean, number, etc
  transform(item: any, tva ?: boolean){
    // {{tjmHt | total :valeur2 :valeur3 }}
    // console.log(val , coef);

    //   // create a method to create totalHT and total TTC

    // console.log('fonction total');
    // if(tva){
    //   return val * coef *(1+ tva/100)
    // }
    // return val*coef;
    console.log(item,'item');
    if(tva){
        return item.totalTTC()
    }
     return item.totalHT()

  }

}
