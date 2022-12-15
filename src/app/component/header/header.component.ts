import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  errorMsg:string | undefined;
  public totalItem:number=0;
  public searchTerm:string='';
  constructor(private cartService:CartService){

  }
  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res=>{
    this.totalItem=res.length;
    })
  }
  serchc(event:any){
this.searchTerm=(event.target as HTMLInputElement).value;
console.log(this.searchTerm );

  }

}
