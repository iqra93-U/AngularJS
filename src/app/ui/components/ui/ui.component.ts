import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  // public open = true;
   public open: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  public onSubmit(){
    // console.log('clicked')

    this.open = !this.open;
    console.log(this.open);
  }

} // dont write anythinh after it
