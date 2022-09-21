import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';


// which starts with @ called decorator
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  // Oder is a model here not a module
  private collection$!: Observable<Order[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>('http://localhost:3000/orders');
  }


  // getter

  //here collection is not a method but a property
  // we can not change the name of collection it must be same as our variable
  get collection(){
    return this.collection$;
  }
  //setter
  set collection(col){
    this.collection$ = col;
  }

}
