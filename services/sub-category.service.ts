import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubCategory } from '../models/sub-category';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
  baseUrl:string;
  constructor(private httpClient:HttpClient) {
    this.baseUrl="http://localhost:3031/subcategory"
   }

   getAll() :Observable<SubCategory[]>{
    return this.httpClient.get<SubCategory[]>(this.baseUrl + "/all");
  }

  getById(subCategoryId:number) :Observable<SubCategory>{
    return this.httpClient.get<SubCategory>(`${this.baseUrl}/${subCategoryId}`);
  }
  addSubCategory(subcategory:SubCategory) : Observable<SubCategory>{
    return this.httpClient.post<SubCategory>(this.baseUrl + "/{categoryId}",subcategory);

  }

  updateSubCategory(subcategory:SubCategory) : Observable<SubCategory>{
     return this.httpClient.put<SubCategory>(this.baseUrl,subcategory);
  }

  deleteCategoryById(subCategoryId:number) :Observable<SubCategory>{
    return this.httpClient.delete<SubCategory>(`${this.baseUrl}/${subCategoryId}`);
  }
}
