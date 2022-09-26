import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../service/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
// variable to store enum
 public states = Object.values(StateOrder);


  public titleParent:string ='List of Orders'

  public collection$ !:Observable<Order[]>

  public headers: string[]= [
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];


  constructor(private orderService: OrdersService) {

      this.collection$ = this.orderService.collection;
      console.log(this.collection$);



   }

  ngOnInit(): void {

  }


}
