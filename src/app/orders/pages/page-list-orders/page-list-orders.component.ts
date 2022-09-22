import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../service/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public titleParent:string ='List of Orders'

  public results !: Order[];

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
    this.orderService.collection.subscribe((data) => {
      this.results = data;
      console.log(this.results);
    })

   }

  ngOnInit(): void {

  }

}
