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
public filterCategory : any;

constructor(private api:ApiService,private cartService:CartService){}

ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList=res;
      this.filterCategory=res;
      this.productList.forEach((element:any) => {
        if(element.category==="women's clothing"|| element.category==="man's clothing")
        element.category='fashion'
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
  //Adding a product to the cart
  addtoCart(item:any){
    this.cartService.addToCart(item);
  }

  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

}
