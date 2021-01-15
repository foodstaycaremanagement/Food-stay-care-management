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

}
