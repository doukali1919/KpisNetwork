import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TgService {
  base_url ="http://localhost:3000/tg"
  constructor(private _http:HttpClient) { }
  getAll3G():Observable<any[]>{

    return this._http.get<any[]>(this.base_url)
  }
}
