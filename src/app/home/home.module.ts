import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { DetailsComponent } from './details/details.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SharedModule } from '../shared/shared/shared.module';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { ProductRelatedComponent } from './product-related/product-related.component';
import { CategorisedProductsComponent } from './categorised-products/categorised-products.component';
import { PostReviewComponent } from './post-review/post-review.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    ProductsComponent,
    CheckoutComponent,
    ProductReviewsComponent,
    ProductRelatedComponent,
    CategorisedProductsComponent,
    PostReviewComponent,
    RegistrationComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
