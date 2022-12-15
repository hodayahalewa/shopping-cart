import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public cartItemList:any=[];
public productList=new BehaviorSubject<any>([]);
  constructor() { }
  getProduct(){
   return this.productList.asObservable()
  }

  setProduct(product:any){
    this.cartItemList.push(...product)
    this.productList.next(product);
  }

  addToCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log("this.cartItemList",this.cartItemList);

  }
  getTotalPrice():number{
    let grandTotal=0;
    this.cartItemList.map((cartProductItem:any)=>{
      grandTotal+=cartProductItem.Total;
    })
    console.log("grandTotal:",grandTotal);

    return grandTotal;
  }
  removeCartItem(product:any){
    this.cartItemList.map((productItem:any,index:any)=>{
      if(product.id==productItem.id){
        this.cartItemList.splice(index,1);
      }
    });
    this.productList.next(this.cartItemList);
  }
  removeAllItem(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }
}
