import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
public productList:any;
searchKey:string="";
errorMassage:any;
  constructor(private api:ApiService,private cartService:CartService){

  }
ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList=res;
      this.productList.forEach((element:any) => {
          Object.assign(element,{Quantity:1,Total:element.price})
      });
      console.log("productList",this.productList);

    },(error)=>{
      this.errorMassage=error;

    });

this.cartService.search.subscribe((val:any)=>{
  this.searchKey=val;
})
  }
  addtoCart(item:any){
this.cartService.addToCart(item);
  }

}
