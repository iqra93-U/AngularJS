import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../service/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  results : any
  constructor(private orderService: OrdersService) {
    this.orderService.collection.subscribe((data) => {
      this.results = data;
      console.log(this.results);
    })

   }

  ngOnInit(): void {

  }

}
