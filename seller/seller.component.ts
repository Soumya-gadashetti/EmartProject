import { Component, OnInit } from '@angular/core';
import { Seller } from '../models/seller';
import { SellerService } from '../services/seller.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  seller:Seller;
  msg:string;
  isNew:boolean;
  constructor(private sellerService:SellerService,
    private actRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    let userId=this.actRoute.snapshot.params.id;
    if(userId){
      this.isNew=false;
      this.sellerService.getSellerDetailsById(userId).subscribe(
        (data) =>{
          this.seller=data;
        }
      );

  }else{
    this.isNew=true;
    this.seller={
    firstName:'',
    lastName:'',
    password:'',
    emailId:'',
    phone:'',
    companyName:'',
    companyDescription:'',
    website:'',
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
  let ob:Observable<Seller>;
  if(this.isNew){
    ob=this.sellerService.addUser(this.seller);
  }else{
    ob=this.sellerService.updateUser(this.seller);
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
