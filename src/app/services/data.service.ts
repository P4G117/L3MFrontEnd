import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = "http://192.168.43.246:8080/api/Products";

  constructor(private _http: HttpClient) { }

getUsers(){
  return this._http.get<User[]>(this.apiUrl);
}

}
