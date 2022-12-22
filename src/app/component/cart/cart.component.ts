import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  public products:any=[];
  public grandTotal !:number;
  public shippingValue:number=30;
  constructor(private cartService:CartService){

  }
  ngOnInit(): void {
    // If there are products in the basket that are in local storage, we will put them in the products variable
   if(localStorage.getItem('localCart')){
      this.products=JSON.parse(localStorage.getItem('localCart')||'{}');
    }
    else{
      this.products=[];
    }

    // Calculation of final price and shipping price
    this.grandTotal=this.cartService.getTotalPrice();
    if(this.products.length>4)
      this.shippingValue+=15;
  }

  // Deleting a product from the shopping cart
  removeItem(item:any){
    this.cartService.removeCartItem(item);
    this.products= JSON.parse(localStorage.getItem('localCart')||'{}');
  }
  //Deleting all products from the shopping cart
  emtycart(){
    this.cartService.removeAllItem();
    this.products= [];

  }
  // Adding a quantity to a product
  incQnt(productItem:any){
    this.grandTotal=this.cartService.incQnt(productItem);
    this.products= JSON.parse(localStorage.getItem('localCart')||'{}');
  }
  //Quantity reduction for a product
  decQnt(productItem:any){
    this.grandTotal=this.cartService.decQnt(productItem);
    this.products= JSON.parse(localStorage.getItem('localCart')||'{}');
  }


}
