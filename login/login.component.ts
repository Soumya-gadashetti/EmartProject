import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Register } from '../models/register';
import { RegisterService } from '../services/register.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Buyer } from '../models/buyer';
import { BuyerService } from '../services/buyer.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  buyer:Buyer;
  msg:string;
  isNew:boolean;
  constructor(private buyerService:BuyerService,
    private actRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    let userId=this.actRoute.snapshot.params.id;
    if(userId){
      this.isNew=false;
      this.buyerService.getBuyerDetailsById(userId).subscribe(
        (data) =>{
          this.buyer=data;
        }
      );

  }else{
    this.isNew=true;
    this.buyer={
    firstName:'',
    lastName:'',
    password:'',
    emailId:'',
    mobileNumber:'',
    address:{
      line1:'',
      line2:'',
      city:'',
      state:'',
      pincode:0,
    },
    userId:0,
    userName:'',
    role:''
    };
  }
}
save(){
  let ob:Observable<Buyer>;
  if(this.isNew){
    ob=this.buyerService.addUser(this.buyer);
  }else{
    ob=this.buyerService.updateUser(this.buyer);
  }
  ob.subscribe(
    (Data) =>{
      this.router.navigateByUrl("");
    },
    (errResponse)=> {
      this.msg=errResponse.error;
      
    }
  );
}
  
}
