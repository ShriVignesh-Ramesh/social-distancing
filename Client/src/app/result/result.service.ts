import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ResultService {


  constructor(private http:HttpClient) { }


  getChart(){
    return this.http.get('https://api.covid19india.org/data.json');
  }
}
