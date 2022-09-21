import { StateOrder } from '../enums/state-order';

export class Order {
  tjmHt = 1200;
  nbJours = 1;
  tva = 20;
  state = StateOrder.OPTION;
  typePresta!: string;
  client!: string;
  comment!: string;
  id!: number; // ! its means value is not initiallised
  // ? means any value from the above object we can use to create an new object
  // constructor() or constructor(tjmHt,nbJours,....  ) instead of creating consructor like this we use
  // a general method with obj which means a consructor could be empty of can pass any value.
  constructor(obj?: Partial<Order>) {

    if (obj) {
      // Object.assign(objet Cible, obj Source )
      // Object.assign(objet initial, nouvel Objet )

      Object.assign(this, obj);
    }
  }
}

// new Order({1200, 3, 5})
// {}
