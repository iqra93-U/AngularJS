import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  results : any
  constructor(private clientService:ClientsService) {
      this.clientService.collection.subscribe((data) => {
        this.results = data;
        console.log(this.results );
      })
   }

  ngOnInit(): void {
  }

}
