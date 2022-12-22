import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Input() totalItem:number=0;
  errorMsg:string | undefined;
  public searchTerm:string='';

  constructor(private cartService:CartService){}

  ngOnInit(): void {
    //Receiving the amount of products in the basket
    this.cartService.cartItem.subscribe(res=>{
      this.totalItem=res;
    })
  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm );
    this.cartService.search.next(this.searchTerm);

  }


}
