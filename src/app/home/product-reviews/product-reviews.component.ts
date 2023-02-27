import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.scss']
})
export class ProductReviewsComponent {
  @Input() reviewsData:any;
  constructor(){}
  ngOnInit():void{
    console.log(this.reviewsData,"THE REVIEW DATA!!!");
    
  }
}
