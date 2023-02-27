import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorisedProductsComponent } from './categorised-products/categorised-products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    {
      path: '',
      component: ProductsComponent
    },
    {
      path: 'details/:id',
      component: DetailsComponent
    },
    {
      path: 'category/:id',
      component: CategorisedProductsComponent
    },
    {
      path: 'checkout',
      component: CheckoutComponent
    },
    {
      path: 'auth',
      component: RegistrationComponent
    },
    {
      path: 'profile/:id',
      component: ProfileComponent
    },
  ],
},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRoutingModule { }