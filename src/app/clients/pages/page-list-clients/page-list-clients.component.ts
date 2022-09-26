import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { Observable } from 'rxjs';
import { ClientsService } from '../../services/clients.service';
import { StateClient } from 'src/app/core/enums/state-client';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public titleParentC:string ='List of Clients';
  public collection$ !: Observable<Client[]>;
  // to store the enum in a variable

  public states = Object.values(StateClient);


  public headers: string[]= [
    'name',
    'comment',
    'totalCaHt',
    'state',
    'tva'
  ];

  // here ClientsService is the model that store all the data of table that we want to display

  constructor(private clientService:ClientsService) {

        this.collection$ = this.clientService.collection;
        console.log(this.collection$  );

   }

  ngOnInit(): void {
  }

}
