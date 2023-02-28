import { Component, Input } from '@angular/core';
import { LocalService } from 'src/app/service/local.service';
import {DialogPosition, MatDialog} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { CartItemsComponent } from '../cart-items/cart-items.component';
import { color } from '@mui/system';
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
  constructor(
    private LocalService:LocalService,
    private  productService:ProductService,
    public dialog: MatDialog
  ){}
  ngOnInit():void{
    this.cartItems=JSON.parse(localStorage.getItem('cartItems') as any) || [];    
    this.whishItem=JSON.parse(localStorage.getItem('WhishList') as any) || [];        
  }

myProducts(event: any): any {   
    const dialogRef = this.dialog.open(CartItemsComponent, {
      panelClass: 'dialogClass',
      data: event,
    });
    dialogRef.afterClosed().subscribe(({reload, data}) => {});
  }
}