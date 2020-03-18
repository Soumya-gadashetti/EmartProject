import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
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
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { FashionComponent } from './fashion/fashion.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { WomenComponent } from './women/women.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CategoryComponent,
    SubCategoryComponent,
    ProfileComponent,
    BuyerComponent,
    SellerComponent,
    LoginComponent,
    ContactComponent,
    RegisterComponent,
    EkartComponent,
    CheckoutComponent,
    ItemsComponent,
    FooterComponent,
    ProductComponent,
    FashionComponent,
    ElectronicsComponent,
    WomenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
