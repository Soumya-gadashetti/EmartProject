import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { ProfileComponent } from './profile/profile.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { EkartComponent } from './ekart/ekart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ItemsComponent } from './items/items.component';
import { ProductComponent } from './product/product.component';
import { FashionComponent } from './fashion/fashion.component';
import { ElectronicsComponent } from './electronics/electronics.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'category',component:CategoryComponent},
  {path:'subcategory',component:SubCategoryComponent},
  {path:'profile',component:ProfileComponent},
  {path:'login',component:LoginComponent},
  {path:'cart',component:EkartComponent},
  {path:'contact',component:ContactComponent},
  {path:'register',component:RegisterComponent},
  {path:'chk',component:CheckoutComponent},
  {path:'item',component:ItemsComponent},
  {path:'seller',component:SellerComponent},
  {path:'product',component:ProductComponent},
  {path:'fas',component:FashionComponent},
  {path:'ele',component:ElectronicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
