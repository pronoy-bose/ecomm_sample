import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopAreaService {

  private cartCountSource = new BehaviorSubject<Number>(0);
  cartCount = this.cartCountSource.asObservable();

  constructor(private http: HttpClient) { }

  updatedCartCount(cartCount: Number) {
    this.cartCountSource.next(cartCount);
  }

  getAllProducts(): Observable<any> {
    return this.http.get("/api/getAllProducts");
  }

  addToCart(cartItem): Observable<any> {
    return this.http.post("/api/addToCart", cartItem);
  }

  getCartItemCount(): Observable<any> {
    return this.http.get("/api/getCartItemCount/2");
  }
}
