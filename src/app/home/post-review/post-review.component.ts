import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-post-review',
  templateUrl: './post-review.component.html',
  styleUrls: ['./post-review.component.scss']
})
export class PostReviewComponent {
  isLoadingReviews=false;
  reviewForm: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    message: new FormControl("", Validators.required),
    rate: new FormControl("", Validators.required)
  })
  constructor(
    private productService: ProductService,
    public dialogRef: MatDialogRef<PostReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    
  }

  postReview() {
    const payload = {
      "name": this.reviewForm.get('name')?.value,
      "message": this.reviewForm.get('message')?.value,
      "rate": this.reviewForm.get('rate')?.value,
      "product_id": this.data,
    }
    if (this.reviewForm.valid) {
      this.isLoadingReviews = true
      this.productService.postReview(payload).subscribe(res => {
        if(res.result=200){
          this.onCloseDialog(res.result)
        }
        this.isLoadingReviews = false
      })
    } else {
      alert("form not valid!!!")
    }
  }

  onCloseDialog(dialogData:any): any {
    console.log(dialogData,'CHECKING THE DATA COMING FROM PARENT ELEMENT!!!!');
    const {reload = false, data = null} = dialogData || {};
    this.dialogRef.close({reload, data});
  }
}
