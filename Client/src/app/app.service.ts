import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs/Rx'
@Injectable({
  providedIn: 'root'
})
export class AppService {


  constructor(private http:HttpClient) { }


  // postData(data){
  //   this.http
  //           .post(
  //               'http://1b58cc7c.ngrok.io/coordinates',
  //               data
  //           )
  // }
  private _handleError(err: HttpErrorResponse | any): Observable<any> {
    const errorMsg = err.error || 'Error: Unable to complete request.';
    return Observable.throw(errorMsg);
}
sendPostRequest(data: any): Observable<any> {
  return this.http.post<any>('http://f60c8445.ngrok.io/coordinates', data);
}
  postData(data): Observable<any> {
    //Wrap agreement in array as service expects a Set
    
    return this.http
        .post(
            'http://f60c8445.ngrok.io/coordinates',
            data
        )
        .pipe(catchError(error => this._handleError(error)));
}
}
