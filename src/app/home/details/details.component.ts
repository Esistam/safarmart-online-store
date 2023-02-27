import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { LocalService } from 'src/app/service/local.service';
import { ProductService } from 'src/app/service/product.service';
import { PostReviewComponent } from '../post-review/post-review.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  productCode = "";
  productData: any;
  isLoadingReviews = false
  isLoadingRelated=false
  category=""
  @Output() relatedData = new EventEmitter<[]>()
  @Output() reviewsData = new EventEmitter<[]>()
  searchForm:FormGroup=new FormGroup({
    search:new FormControl("")
  })
  isLoading = false;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: LocalService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productCode = params['id'];
    });
    this.getproductDetails(this.productCode)
    this.getProductReviews()
  }
  getproductDetails(code: any) {
    this.isLoading = true
    this.productService.fetchProductsDetails(code).subscribe(res => {      
      this.productData = res.result[0]      
      this.isLoading = false
      this.getProductRelated(this.productData.productCategory)
    })
  }
  getProductRelated(code:any) {    
    let payload={
      "categ_id":code,
      "name":this.searchForm.get("search")?.value
    }    
    this.isLoadingRelated = true
    this.productService.fetchProductRelated(payload).subscribe(res => {
      this.relatedData = res.result
      this.isLoadingRelated = false

    })
  }
  getProductReviews() {
    this.isLoadingRelated = true
    this.productService.fetchProductReviews(this.productCode).subscribe(res => {
      this.reviewsData = res.result
      this.isLoadingRelated = false

    })
  }
  addToCart(product: any): void {
    this.isLoading = true
    this.cartService.addToCart(product)
    this.isLoading = false
  }
  addToWhilst(product: any): void {
    this.isLoading = true
    this.cartService.addWhishList(product)
    this.isLoading = false
  }

  addReview(event: any): any {    
    const dialogRef = this.dialog.open(PostReviewComponent, {
      panelClass: 'dialogClass',
      data: event,
    });
    dialogRef.afterClosed().subscribe(({reload, data}) => {      
      if (reload==200) {
        this.getProductReviews()
      }
    });
  }
}
