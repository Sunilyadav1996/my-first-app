import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomepageService {
  baseUrl:string="http://localhost:3000/";

  constructor(private http:HttpClient) { }

  public getHeader():Observable<any>{
      return this.http.get(this.baseUrl+'header/');
  }

  public getSideBar():Observable<any>{
    return this.http.get(this.baseUrl+'sidebar/');
  }
  public getFooter():Observable<any>{
    return this.http.get(this.baseUrl+'footer/');
  }



}
