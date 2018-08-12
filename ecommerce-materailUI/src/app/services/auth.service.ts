import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticateuser(loginData):Observable<HttpResponse<Config>> {
    return this.http.post<Config>('/api/login', loginData,{ observe: 'response' });
  }

  getUserByEmail(userEmail){
    return this.http.post('/api/getByUserEmail', userEmail);
  }

  registerUser(registerData) {
    return this.http.post('/api/registerUser', registerData);
  }

  logOut(){
    localStorage.removeItem("authToken");
    if(localStorage.getItem("authToken")){
      return true;
    }else{
      return false;
    }
  }
}
