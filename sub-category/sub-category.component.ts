import { Component, OnInit } from '@angular/core';
import { SubCategory } from '../models/sub-category';
import { SubCategoryService } from '../services/sub-category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
  subcategory:SubCategory;
  msg:string;
  isNew:boolean;
  constructor(private subcategoryService:SubCategoryService,
    private actRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    let subCategoryId=this.actRoute.snapshot.params.id;
    if(subCategoryId){
      this.isNew=false;
      this.subcategoryService.getById(subCategoryId).subscribe(
        (data) =>{
          this.subcategory=data;
        }
      );

  }else{
    this.isNew=true;
    this.subcategory={
    subCategoryName:'',
    description:'',
    

    };
  }
}
save(){
  let ob:Observable<SubCategory>;
  if(this.isNew){
    ob=this.subcategoryService.addSubCategory(this.subcategory);
  }else{
    ob=this.subcategoryService.updateSubCategory(this.subcategory);
  }
  ob.subscribe(
    (Data) =>{
      this.router.navigateByUrl("item");
    },
    (errResponse)=> {
      this.msg=errResponse.error;
      
    }
  );
}

}
