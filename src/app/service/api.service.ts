import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import{catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

productListItem:any
  constructor(private http:HttpClient) { }
  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      this.productListItem=res;
      return res;
    })).pipe(
      catchError(this.handleError)
    )
  }
  getProductList(){
    return this.productListItem;
  }
  private handleError(error: HttpErrorResponse) {
    let errorMassage='';
    errorMassage+=`${error.message}`;
    return throwError(() => new Error(errorMassage));
  }
  }

