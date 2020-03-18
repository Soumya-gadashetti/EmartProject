import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seller } from '../models/seller';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  baseUrl:string;
  constructor(private httpClient:HttpClient) {
    this.baseUrl="http://localhost:3000/seller";
   }
   getAll() :Observable<Seller[]>{
    return this.httpClient.get<Seller[]>(this.baseUrl);
  }

  getSellerDetailsById(userId:number) :Observable<Seller>{
    return this.httpClient.get<Seller>(`${this.baseUrl}/${userId}`);
  }

  addUser(seller:Seller) : Observable<Seller>{
    return this.httpClient.post<Seller>(this.baseUrl + "/sign",seller);

  }

  updateUser(seller:Seller) : Observable<Seller>{
     return this.httpClient.put<Seller>(this.baseUrl +"/sel",seller);
  }

  delete(userId:number) :Observable<Seller>{
    return this.httpClient.delete<Seller>(`${this.baseUrl + "/seller"}/${userId}`);
  }
}
