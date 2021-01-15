import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CanteenMenu } from './CanteenMenu';


@Injectable({
  providedIn: 'root'
})
export class CanteenService {

  baseUrl:string = "http://localhost:8080/menu";

  constructor(private http: HttpClient) { }

  getCanteenMenu():Observable<CanteenMenu[]> {
    return this.http.get<CanteenMenu[]>(this.baseUrl);
  }

  getDays():Observable<String[]> {
    return this.http.get<String[]>(this.baseUrl+"/days");
  }

  getMealTypes():Observable<String[]> {
    return this.http.get<String[]>(this.baseUrl+"/mealtypes");
  }

  getCanteenMenuForOwner(day:string,mealType:string):Observable<CanteenMenu[]>
  {   
   return this.http.get<CanteenMenu[]>(this.baseUrl+"/"+day+"/"+mealType);
  }

  



}
