import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { LocalService } from 'src/app/service/local.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-related',
  templateUrl: './product-related.component.html',
  styleUrls: ['./product-related.component.scss']
})
export class ProductRelatedComponent {
  @Input() relatedData:any;
  isLoadingTableData = false;
  productData:any[]=[]
  cartData:any[]=[]
  isLoading=false
  subTotal=0.00
  constructor(
    private ProductService:ProductService,
    private LocalService:LocalService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    
  }

  addToCart(product:any):void{
    console.log(product,"KADWEKA HUSSEIN");
    this.isLoading=true
    this.LocalService.addToCart(product)
    // this.toastr.success("SUCCESSFULLY ADDED TO CART",'Toastr fun!')
    this.isLoading=false
  }
  
  addToWhilst(product:any):void{
    this.isLoading=true
    this.LocalService.addToCart(product)
    // this.toastr.success("SUCCESSFULLY ADDED TO CART",'Toastr fun!')
    this.isLoading=false
  }
  goToDetails(event:{code:any}){ 
    this.router.navigate([`/details/${event}`])
  }
}

