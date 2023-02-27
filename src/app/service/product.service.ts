import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl=environment.BASE_URL
  constructor(private http: HttpClient) { }
  fetchProducts(): Observable<any> {
    return this.http.post(this.baseUrl + '/view/products', {"name":""});
  }
  fetchRawProducts(name:any): Observable<any> {
    return this.http.post(this.baseUrl + '/view/raw/products', {"name":name});
  }


  // CATEGORY SECTION center
  fetchRawCategoryProducts(): Observable<any> {   
    return this.http.post(this.baseUrl + '/view/catgory/products', {"name":"category"});
  }

  fetchCategoryInformation(payload:any): Observable<any> {
    return this.http.post(this.baseUrl + '/view/category/information',{"category_id":payload});
  }
  fetchCategoryproducts(payload:any): Observable<any> {
    console.log(payload,"THE SERVICES TESTING!!!");
    
    return this.http.post(this.baseUrl + '/view/category/products',payload);
  }

  fetchCategory(name:any): Observable<any> {
    return this.http.post(this.baseUrl + '/view/category', {"name":name});
  }

  // SINGLE PAGE SECTION CENTER
  postReview(payload:any):Observable<any>{
    return this.http.post(this.baseUrl + '/new/review', payload);
  }
  fetchProductsDetails(productCode:any): Observable<any> {
    return this.http.post(this.baseUrl + '/view/details/products', {"product_id":productCode});
  }
  fetchProductReviews(productCode:any): Observable<any> {
    return this.http.post(this.baseUrl + '/my/review', {"product_id":productCode});
  }
  fetchProductRelated(payload:any): Observable<any> {
    return this.http.post(this.baseUrl + '/related_products',payload);
  }
}