import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  item:Item;
  msg:string;
  isNew:boolean;
  constructor(private itemService:ItemService,
    private actRoute:ActivatedRoute,
    private router:Router) { }

   ngOnInit() {
//     let itemId=this.actRoute.snapshot.params.id;
//     if(itemId){
//       this.isNew=false;
//       this.itemService.getById(itemId).subscribe(
//         (data) =>{
//           this.item=data;
//         }
//       );

//   }else{
//     this.isNew=true;
//     this.item={
//       "itemName":'',
//       "description":'',
//       "stock":0,
//       "seller":{
//         firstName:'',
//         lastName:'',
//         password:'',

//       }  
    

//     };
//   }
 }
// save(){
//   let ob:Observable<Item>;
//   if(this.isNew){
//     ob=this.itemService.addItem(this.item);
//   }else{
//     ob=this.itemService.updateItem(this.item);
//   }
//   ob.subscribe(
//     (Data) =>{
//       this.router.navigateByUrl("");
//     },
//     (errResponse)=> {
//       this.msg=errResponse.error;
      
//     }
//   );
// }


}
