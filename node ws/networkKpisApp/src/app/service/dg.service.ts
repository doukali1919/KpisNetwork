import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DgService {
  base_url ="http://localhost:3000/dg"
  constructor(private _http:HttpClient) { }
  getAll2G():Observable<any[]>{

    return this._http.get<any[]>(this.base_url)
  }
}
