import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoading=false
  cartItems!:any[]
  whishItem!:any[]
  searchForm:FormGroup=new FormGroup({
    search:new FormControl("")
  })
  constructor(){}
  ngOnInit():void{
    this.cartItems=JSON.parse(localStorage.getItem('cartItems') as any) || [];    
    this.whishItem=JSON.parse(localStorage.getItem('wishItems') as any) || [];            
  }

}