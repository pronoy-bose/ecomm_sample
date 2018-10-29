import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopAreaService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    // let authToken = localStorage.getItem("authToken");
    // var headers = new HttpHeaders().set('Authorization', authToken);
    // var options = {
    //   headers: headers
    // };
    return this.http.get("/api/getAllProducts");
  }

  addToCart(cartItem):Observable<any>{
    return this.http.post("/api/addToCart",cartItem);
  }
}
