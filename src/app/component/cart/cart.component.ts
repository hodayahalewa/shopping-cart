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
   if(localStorage.getItem('localCart')){
      this.products=JSON.parse(localStorage.getItem('localCart')||'{}');
    }
    else{
      this.products=[];
    }


    this.grandTotal=this.cartService.getTotalPrice();
    if(this.products.length>4)
      this.shippingValue+=15;
  }


  removeItem(item:any){
    this.cartService.removeCartItem(item);
    this.products= JSON.parse(localStorage.getItem('localCart')||'{}');
  }
  emtycart(){
    this.cartService.removeAllItem();
    this.products= [];

  }

  incQnt(productItem:any){
    this.grandTotal=this.cartService.incQnt(productItem);
    this.products= JSON.parse(localStorage.getItem('localCart')||'{}');
  }
  decQnt(productItem:any){
    this.grandTotal=this.cartService.decQnt(productItem);
    this.products= JSON.parse(localStorage.getItem('localCart')||'{}');
  }


}
