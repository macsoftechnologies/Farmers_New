import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { throwError, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  user = new EventEmitter<any>();

  baseUrl = environment.apiURL;

  

  constructor(private http:HttpClient) { }

  private extractdata(res : Response){
    let body = res;
    return body || {};
  }

  public errorHandler(error : HttpErrorResponse){
    if(error.status === 400)
       return throwError("Url is not found")
  }


    // admin login

  adminlogin(data:any): Observable<any>{
    return this.http.post(this.baseUrl + "admin",data).pipe(map(this.extractdata))
  }


  // farmers list
  farmersList(): Observable<any>{
    return this.http.get(this.baseUrl + "master").pipe(map(this.extractdata))
  }
  
  // GetFarmersList(): Observable<any>{
  //   return this.http.get(this.baseUrl + "master").pipe(map(this.extractdata))
  // }

  // DistrictFarmers

  DistrictFarmers(districtid:any): Observable<any>{
    let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Request-Method', '*');
        headers.append('Access-Control-Allow-Origin', '*');
     return  this.http.post(this.baseUrl + "dist/faramers" ,districtid).pipe(map(this.extractdata))
  }

  // master data
  getmasterdata(): Observable<any>{
    return this.http.get(this.baseUrl + "master").pipe(map(this.extractdata))
  }
    //  userprofile
  userprofile(userid:any): Observable<any>{
    let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Request-Method', '*');
        headers.append('Access-Control-Allow-Origin', '*');
     return  this.http.post(this.baseUrl + "user/profile" ,userid).pipe(map(this.extractdata))
  }


     //  userprofile
    userapprove(data:any): Observable<any>{
      let headers = new HttpHeaders();
          headers.append('Content-Type', 'application/json');
          headers.append('Access-Control-Request-Method', '*');
          headers.append('Access-Control-Allow-Origin', '*');
       return  this.http.post(this.baseUrl + "user/approve" ,data).pipe(map(this.extractdata))
    }
}
