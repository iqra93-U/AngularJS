import { StateClient } from "../enums/state-client"

export class Client {

  state = StateClient.INACTIVE;
  tva = 20;
  id !: 1;
  name !: string;
  totalCaHt!: number;
  comment!: string ;



  constructor(obj?: Partial<Client>){
    if(obj){

      Object.assign(this, obj);
    }

  }

}
