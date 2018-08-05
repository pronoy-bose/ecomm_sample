import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SharedDataService {
    private userData: any;
    private isLoggedIn: Boolean;

    getUserData() {
        return this.userData;
    }

    setUserData(userData) {
        this.userData = userData;
    }

    getIsLoggedIn() {
        return this.isLoggedIn;
    }

    setIsLoggedIn(isLoggedIn) {
        this.isLoggedIn = isLoggedIn
    }

    constructor() { }

}
