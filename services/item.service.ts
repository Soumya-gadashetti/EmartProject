import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl:string;
  constructor(private httpClient:HttpClient) {
    this.baseUrl="http://localhost:3030/item"
   }

   getAll() :Observable<Item[]>{
    return this.httpClient.get<Item[]>(this.baseUrl);
  }

  getById(itemId:number) :Observable<Item>{
    return this.httpClient.get<Item>(`${this.baseUrl}/${itemId}`);
  }
  addItem(item:Item) : Observable<Item>{
    return this.httpClient.post<Item>(this.baseUrl + "/user/{userId}/subcategory/{subCategoryId}/discount/{discountId}",item);

  }

  updateItem(item:Item) : Observable<Item>{
     return this.httpClient.put<Item>(this.baseUrl,item);
  }

  deleteCategoryById(itemId:number) :Observable<Item>{
    return this.httpClient.delete<Item>(`${this.baseUrl}/${itemId}`);
  }

}
