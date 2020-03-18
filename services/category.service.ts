import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl:string;
  constructor(private httpClient:HttpClient) {
    this.baseUrl="http://localhost:3031/category"
   }

   getAll() :Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.baseUrl);
  }

  getById(categoryId:number) :Observable<Category>{
    return this.httpClient.get<Category>(`${this.baseUrl}/${categoryId}`);
  }
  addCategory(category:Category) : Observable<Category>{
    return this.httpClient.post<Category>(this.baseUrl + "/add",category);

  }

  updateCategory(category:Category) : Observable<Category>{
     return this.httpClient.put<Category>(this.baseUrl,category);
  }

  deleteCategoryById(categoryId:number) :Observable<Category>{
    return this.httpClient.delete<Category>(`${this.baseUrl}/${categoryId}`);
  }
}
