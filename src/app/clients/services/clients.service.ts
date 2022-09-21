import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  // ! because it not initiallized at that point
   private collection$!: Observable<Client[]>;

  constructor(private http: HttpClient ) {
    this.collection = this.http.get<Client[]>('http://localhost:3000/clients');
  }


  // getter
  get collection(){
    return this.collection$;
}

  //setter
  set collection(col){
    this.collection$ =col ;
  }
}
