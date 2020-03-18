import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl:string;
  constructor(private httpClient:HttpClient) {
    this.baseUrl="http://localhost:8070/register";
   }
   getAll() :Observable<Register[]>{
    return this.httpClient.get<Register[]>(this.baseUrl);
  }

  getAllById(id:number) :Observable<Register>{
    return this.httpClient.get<Register>(`${this.baseUrl}/${id}`);
  }

  addUser(register:Register) : Observable<Register>{
    return this.httpClient.post<Register>(this.baseUrl + "/reg",register);

  }

  updateUser(register:Register) : Observable<Register>{
     return this.httpClient.put<Register>(this.baseUrl,register);
  }

  delete(id:number) :Observable<Register>{
    return this.httpClient.delete<Register>(`${this.baseUrl + "/registration"}/${id}`);
  }
}

