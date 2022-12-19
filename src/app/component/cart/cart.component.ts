import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  public product:any=[];
  public grandTotal !:number;
  public shippingValue:number=30;
  constructor(private cartService:CartService){

  }
  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res=>{
      this.product=res;
      console.log(this.product);
      this.grandTotal=this.cartService.getTotalPrice();
    });
    if(this.product.length>4)
      this.shippingValue+=15;
  }


  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }
  emtycart(){
    this.cartService.removeAllItem();
  }

  incQnt(productItem:any){
    this.product.forEach((element:any) => {
      if(productItem.id==element.id){
        if(productItem.Quantity!=5){
          element.Quantity++;
          element.Total+=parseFloat(element.price.toFixed(2));
          this.grandTotal=this.cartService.getTotalPrice();
        }
      }
      //localstorage-setitem('),json.strin
    });
  }
  decQnt(productItem:any){
    this.product.forEach((element:any) => {
      if(productItem.id==element.id){
        if(productItem.Quantity!=1)
        {
          element.Quantity--;
          element.Total=parseFloat((element.Total-element.price).toFixed(2));
          this.grandTotal=this.cartService.getTotalPrice();
        }

      }
      //localstorage-setitem('),json.strin
    });
  }
  // cartDetail(){
  //   if(localStorage.getItem('lo'))
  // }
}
