import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ShoppingCart';
  errorMassage: boolean =false;
  error:string | undefined;
  
  constructor(private apiservise:ApiService){

  }
  ngOnInit(): void {
    this.apiservise.getProduct().subscribe(res=>{

    },(error)=>{
      this.errorMassage=true;
      this.error=error;

    });


  }


}
