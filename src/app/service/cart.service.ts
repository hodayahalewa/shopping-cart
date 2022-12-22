import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList:any=[];
  public productList=new BehaviorSubject<any>([]);
  public search=new BehaviorSubject<string>("");
  public cartItem=new EventEmitter<number>();
  public grandTotal:number | undefined;
  cartDataNull:any=[];

  constructor() { }

  getProduct(){
    return this.productList.asObservable()
  }
  setProduct(product:any){
    this.cartItemList.push(...product)
    this.productList.next(product);
  }
  
  //Adding a product to the cart
  addToCart(product:any){
    var index:number=-1;
    //local storage
    index=-1;
    this.cartDataNull=localStorage.getItem('localCart');//get cart from local storage
    console.log(this.cartDataNull);

    if(this.cartDataNull==null){//if the local storage empty i push the item to local storage
      this.cartItemList.push(product);
      localStorage.setItem('localCart',JSON.stringify(this.cartItemList));
    }
    else{//get the local storage items

      this.cartItemList=JSON.parse( localStorage.getItem('localCart')||'{}');
      //chack if this product exist in local storage
      if(this.cartItemList!=null){

        for(var i=0;i<this.cartItemList.length;i++){
          if(parseInt(this.cartItemList[i].id)===product.id){
            this.cartItemList[i].Quantity++;
            this.cartItemList[i].Total+=this.cartItemList[i].price;
            index=i;
            break;
          }
        }
        if(index==-1){
          this.cartItemList.push(product);
          localStorage.setItem('localCart',JSON.stringify(this.cartItemList))

        }
        else{
          localStorage.setItem('localCart',JSON.stringify(this.cartItemList))

        }
      }
    }
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    this.cartItem.emit(this.cartItemList.length);

  }

  //Final price calculation for the products in the basket
  getTotalPrice(){
    let grandTotal=0;
    if(localStorage.getItem('localCart')){

      this.cartItemList=JSON.parse(localStorage.getItem('localCart')||'{}');
      if(this.cartItemList){
        for(var i=0;i<this.cartItemList.length;i++)
        {
          grandTotal+=this.cartItemList[i].Total;
        }
      }
      return parseFloat(grandTotal.toFixed(2));
    }
    else{
      return 0;
    }
  }

  //Deleting a product in the basket
  removeCartItem(product:any){
    //local storage
    this.cartItemList=JSON.parse(localStorage.getItem('localCart')||'{}')
      if(this.cartItemList){
        for(var i=0;i<this.cartItemList.length;i++){
          if(this.cartItemList[i].id===product.id){
            this.cartItemList.splice(i,1);
            localStorage.setItem('localCart',JSON.stringify(this.cartItemList));
          }
        }
      }
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    this.cartItem.emit(this.cartItemList.length);
  }

  //Deleting all products in the basket
  removeAllItem(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
    localStorage.removeItem('localCart');
  }

  // Adding a quantity to a product
  incQnt(productItem:any):number{
    this.cartItemList= JSON.parse(localStorage.getItem('localCart')||'{}');
     this.cartItemList.forEach((element:any) => {
       if(productItem.id==element.id){
         if(productItem.Quantity!=5){
           element.Quantity++;
           element.Total+=parseFloat(element.price.toFixed(2));
         }
       }

     });
     localStorage.setItem('localCart',JSON.stringify(this.cartItemList));
    this.productList.next(this.cartItemList);

     this.grandTotal=this.getTotalPrice();
     return this.grandTotal;
   }

  //Quantity reduction for a product
   decQnt(productItem:any):number{
     this.cartItemList= JSON.parse(localStorage.getItem('localCart')||'{}');
     this.cartItemList.forEach((element:any) => {
       if(productItem.id==element.id){
         if(productItem.Quantity!=1)
         {
           element.Quantity--;
           element.Total=parseFloat((element.Total-element.price).toFixed(2));
         }
       }
     });
     localStorage.setItem('localCart',JSON.stringify(this.cartItemList) );
    this.productList.next(this.cartItemList);

     this.grandTotal=this.getTotalPrice();
    return this.grandTotal;
   }

    //Calculation of the amount of products in the basket
   getCountCartItem(){
    var cartItem=JSON.parse(localStorage.getItem('localCart')||'{}');
    this.cartItem.emit(cartItem);
   }
}
