import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public titleParentC:string ='List of Clients';
  public results !: Client[];



  public headersClient: string[]= [
    'name',
    'comment',
    'NbJours',
    'Total HT',
    'State',
    'TVA'
  ];

  constructor(private clientService:ClientsService) {
      this.clientService.collection.subscribe((data) => {
        this.results = data;
        console.log(this.results );
      })
   }

  ngOnInit(): void {
  }

}
