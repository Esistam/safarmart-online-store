import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { LocalService } from 'src/app/service/local.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
isLoadingProducts=false;
isLoadingCategories=false
productData1:any[]=[]
productData2:any[]=[]
categoryData:any[]=[]
searchForm:FormGroup=new FormGroup({
  search:new FormControl("")
})
constructor(
  private ProductService:ProductService,
  private LocalService:LocalService,
  private router: Router,
  // private toastr: ToastrService
){}
ngOnInit():void{
  this.getProducts()
  this.getCategories()
}

getProducts(){
  this.isLoadingProducts=true
  this.ProductService.fetchRawProducts(this.searchForm.get("search")?.value).subscribe(res=>{       
    this.productData1=res.result.item1
    this.productData2=res.result.item2
    this.isLoadingProducts=false    
  },(error) => {
    this.isLoadingProducts = false;
  });
}
getCategories(){
  this.isLoadingProducts=true
  this.ProductService.fetchCategory(this.searchForm.get("search")?.value).subscribe(res=>{   
    this.categoryData=res.result.items     
    this.isLoadingProducts=false    
  },(error) => {
    this.isLoadingProducts = false;
  });
}
addToCart(product:any):void{
  console.log("TESTING THE ACTIONS 9090909090!!!!!!!!11");
  this.isLoadingProducts=true
  this.LocalService.addToCart(product)
  this.isLoadingProducts=false
}

addToWhilst(product:any):void{
  console.log("TESTING THE ACTIONS");
  
  this.isLoadingProducts=true
  this.LocalService.addWhishList(product)
  this.isLoadingProducts=false
}
goToDetails(event:{code:any}){ 
  this.router.navigate([`/details/${event}`])
}
}
