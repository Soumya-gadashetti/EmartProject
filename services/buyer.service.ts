import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buyer } from '../models/buyer';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  baseUrl:string;
  constructor(private httpClient:HttpClient) {
    this.baseUrl="http://localhost:3000/buyer";
   }
   getAll() :Observable<Buyer[]>{
    return this.httpClient.get<Buyer[]>(this.baseUrl);
  }

  getBuyerDetailsById(userId:number) :Observable<Buyer>{
    return this.httpClient.get<Buyer>(`${this.baseUrl}/${userId}`);
  }

  addUser(buyer:Buyer) : Observable<Buyer>{
    return this.httpClient.post<Buyer>(this.baseUrl + "/signup",buyer);

  }

  updateUser(buyer:Buyer) : Observable<Buyer>{
     return this.httpClient.put<Buyer>(this.baseUrl +"/buy/",buyer);
  }

  delete(userId:number) :Observable<Buyer>{
    return this.httpClient.delete<Buyer>(`${this.baseUrl + "/buyer"}/${userId}`);
  }
}
