import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, private domSanitizer: DomSanitizer) { }

  getAllProducts(): Observable<any> {
    let authToken = localStorage.getItem("authToken");
    var headers = new HttpHeaders().set('Authorization', authToken);
    var options = {
      headers: headers
    };
    return this.http.get("/api/getAllProducts", options);
  }
}
