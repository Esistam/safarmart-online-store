import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalService } from 'src/app/service/local.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-categorised-products',
  templateUrl: './categorised-products.component.html',
  styleUrls: ['./categorised-products.component.scss']
})
export class CategorisedProductsComponent {
  categoryCode="";
  categoryData:any;
  public productList:Array<any>=[];
  isLoadingCatgory=true;
  isLoading=false;
  searchForm:FormGroup=new FormGroup({
    search:new FormControl("")
  })
  constructor(
    private route: ActivatedRoute,
    private productService:ProductService,
    private cartService:LocalService,
    private router: Router,
  ){}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoryCode = params['id'];
    });
    this.productService.fetchCategoryInformation(this.categoryCode).subscribe(res=>{      
    this.categoryData=res.result[0]
    this.isLoadingCatgory=false
    })
    this.getCategoryProducts()
   
  }

  addToCart(product:any):void{
    this.isLoading=true
    this.cartService.addToCart(product)    
    this.isLoading=false
  }
  addToWhilst(product:any):void{
    this.isLoading=true
    this.cartService.addWhishList(product)    
    this.isLoading=false
  }
  goToDetails(event:{code:any}){ 
    this.router.navigate([`/details/${event}`])
  }
  getCategoryProducts(){    
    let payload={
      "category_id":this.categoryCode,
      "name":this.searchForm.get('search')?.value
    }   
    console.log(payload,"THE FORMAVIEWS");
    
    this.isLoading=true
    this.productService.fetchCategoryproducts(payload).subscribe(res=>{    
      this.productList=res.result
      console.log(this.productList);
      
      this.isLoading=false
    })
  }
}
