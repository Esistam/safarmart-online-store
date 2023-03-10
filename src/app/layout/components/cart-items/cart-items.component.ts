import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LocalService } from 'src/app/service/local.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent {
  isLoading = false
  valid=true
  cartItems = JSON.parse(localStorage.getItem("cartItems") as any) || []
  whishItem = JSON.parse(localStorage.getItem("wishItems") as any) || []
  totalCosting = JSON.parse(localStorage.getItem("totalCosting") as any) || 0.0
  quantityForm: FormGroup = new FormGroup({
    quantity: new FormControl("")
  })
  constructor(
    private cartService: LocalService,
    private cdref: ChangeDetectorRef
  ) { }
  ngOnInit(): void {
    this.getCartItems()
  }
  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
  getCartItems(){
    this.isLoading=true
    this.cartItems = JSON.parse(localStorage.getItem("cartItems") as any) || []
    let temp = this.cartItems.map(function (item: any) {
      return parseFloat(item.productTotalPrice)
    });
    let sum = temp.reduce(function (prev: any, next: any) {
      return prev + next
    }, 0)
    localStorage.setItem("totalCosting", JSON.stringify(sum));
    this.totalCosting=JSON.parse(localStorage.getItem("totalCosting") as any) || 0.0
    this.isLoading=false
  }
  addToCart(product: any) {
    console.log(product, "CART ITEMS");

    let cartItem = this.cartItems.find(function (cartItem: any) {
      return cartItem.productId == product
    });
    if (this.cartItems.length == 0) {
      this.cartItems.push({
        "productName": product.productName,
        "productImage": product.productImage,
        "productId": product.productId,
        "productQuantity": 1,
        "productPrice": product.productPrice,
        "productTotalPrice": product.productPrice,
      })
    } else {
      let cartItem = this.cartItems.find((element: any) => element.productId == product.productId);
      if (cartItem === undefined) {
        console.log('ITEM IS COMPLETELY NEW');

        this.cartItems.push({
          "productName": product.productName,
          "productImage": product.productImage,
          "productId": product.productId,
          "productQuantity": 1,
          "productPrice": product.productPrice,
          "productTotalPrice": product.productPrice,
        })
      }
    }
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
  }
  remove_items(product: any) {
    console.log(product,"TESTING THE BUTTON EVENTS!!!!!!!!!!!!");
    
    let temp = this.cartItems.filter((item: any) => item.productId != product.productId)    
    localStorage.setItem("cartItems", JSON.stringify(temp));
    this.getCartItems()
  }
  updateQuantity(productId: any,sign:any) {    
    let quanty=this.quantityForm.get('quantity')?.value
    for (let product of this.cartItems) {
      if (product.productId == productId && sign==='+') {
        product.productQuantity = product.productQuantity+1;
        product.productTotalPrice = product.productQuantity * product.productPrice
      }else if(product.productId == productId && sign==='-'){
        product.productQuantity = product.productQuantity-1;
        product.productTotalPrice = product.productQuantity * product.productPrice
      }
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));    
      let temp = this.cartItems.map(function (item: any) {
        return parseFloat(item.productTotalPrice)
      });
      let sum = temp.reduce(function (prev: any, next: any) {
        return prev + next
      }, 0)
      localStorage.setItem("totalCosting", JSON.stringify(sum));    
      this.totalCosting=JSON.parse(localStorage.getItem("totalCosting") as any) || 0.0
    }
   
  }
}
