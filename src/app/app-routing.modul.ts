import{NgModule} from '@angular/core';
import{RouterModule,Routes}from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';

const routes:Routes=[
    {path:'',redirectTo:'product',pathMatch:'full'},
    {path:'cart',component:CartComponent},
    {path:'product',component:ProductsComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
