import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
  isLoading=false;
  constructor(){}
  ngOnInit():void{}
  
  getItems(){
    this.isLoading=true
    this.isLoading=false
  }
}
