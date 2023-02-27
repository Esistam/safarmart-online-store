import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LocalService {
  baseUrl = environment.BASE_URL;
  cartItems=JSON.parse(localStorage.getItem("cartItems") as any) || []
  wishItems=JSON.parse(localStorage.getItem("wishItems") as any) || []
  totalCosting=JSON.parse(localStorage.getItem("totalCosting") as any) || []
  constructor(
    private http: HttpClient,
  ) { }
  addToCart(product:any){   
    console.log(product,"CART ITEMS");
     
    let cartItem=this.cartItems.find(function(cartItem: any){
      return cartItem.productId == product
    });
    if(this.cartItems.length==0){
      console.log('CART IS EMPTY KABSA!!!!!!!!');
      
      this.cartItems.push({
        "productName":product.productName,
        "productImage":product.productImage,
        "productId":product.productId,
        "productQuantity":1,
        "productPrice":product.productPrice,
        "productTotalPrice":product.productPrice,
      })
    }else{
      let cartItem=this.cartItems.find((element:any)=>element.productId ==product.productId);
      if(cartItem===undefined){
        console.log('ITEM IS COMPLETELY NEW');
        
        this.cartItems.push({
          "productName":product.productName,
          "productImage":product.productImage,
          "productId":product.productId,
          "productQuantity":1,
          "productPrice":product.productPrice,
          "productTotalPrice":product.productPrice,
        })
      }
    }
    localStorage.setItem("cartItems",JSON.stringify(this.cartItems));
  }
  removeItemCart(product:any){    
  let temp=this.cartItems.filter((item:any)=>item.productId !=product)
  localStorage.setItem("cartItems",JSON.stringify(temp));
  }
  updateQuantity(productId:any,quanty:any){
    for(let product of this.cartItems){
      if(product.productId==productId){
        product.productQuantity=quanty;
        product.productTotalPrice=quanty*product.productPrice
      }
    }
    localStorage.setItem("cartItems",JSON.stringify(this.cartItems));
  }
  getTotal(){
    let temp=this.cartItems.map(function(item:any){
      return parseFloat(item.productPrice)
    });
    let sum = temp.reduce(function(prev:any,next:any){
      return prev + next
    },0)
    localStorage.setItem("totalCosting",JSON.stringify(sum));
    console.log(sum,"THE SUM OF CART ITE,S");
    
  }
  addWhishList(product:any){
    let wishItem=this.wishItems.find(function(wishItem: any){
      return wishItem.productId == product
    });
    if(this.wishItems.length==0){
      this.wishItems.push({
        "productName":product.productName,
        "productImage":product.productImage,
        "productId":product.productId,
        "productQuantity":1,
        "productPrice":product.productPrice,
        "productTotalPrice":product.productPrice,
      });
    }else{
      let wishItem=this.wishItems.find((element:any)=>element.productId ==product.productId);
      if(wishItem===undefined){
        this.wishItems.push({
          "productName":product.productName,
          "productImage":product.productImage,
          "productId":product.productId,
          "productQuantity":1,
          "productPrice":product.productPrice,
          "productTotalPrice":product.productPrice,
        })
      }
    }
    localStorage.setItem("wishItems",JSON.stringify(this.wishItems));
  }
}
