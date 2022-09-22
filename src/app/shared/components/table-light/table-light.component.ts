import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {
  @Input() collection!: Order[];
  @Input() tables!: string[];

  // for Clients table
  @Input() collectionClient!:Client[];
  @Input() tableClient!: string[]; // display header

  constructor() {
    console.log(this.collection);  //undefined
    console.log(this.tables ,'inconstructor'); //undefined
    console.log(this.collectionClient ,'inconstructorn for clients'); //undefined
   }

  ngOnInit(): void {
    console.log(this.collection); //undefined
    console.log(this.tables , 'OnInit Table');
    console.log(this.collectionClient ,'OnInit Table for clients');
  }

  // it take the time collection to declare, so in Onchange it will display the values
  ngOnChanges(){
    console.log(this.collection);
    console.log(this.collectionClient);

  }
}
