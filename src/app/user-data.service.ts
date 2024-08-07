import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }
  getUsersList(pageNum:any):Observable<any>{
    return this.http.get(`https://reqres.in/api/users?page=${pageNum}`)
  }
  getUserById(id:any):Observable<any>{
    return this.http.get(`https://reqres.in/api/users/${id}`)
  }
}
