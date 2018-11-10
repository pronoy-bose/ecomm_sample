import { LoaderService } from './../loader.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private loaderService: LoaderService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.showLoader();
        
        // add authorization header with jwt token if available
        let authToken = localStorage.getItem('authToken');
        let userId = localStorage.getItem('userId');
        request = request.clone({
            setHeaders: {
                Authorization: `${authToken}`,
                UserId: `${userId}`
            }
        });

        return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                this.onEnd();
            }
        },
            (err: any) => {
                this.onEnd();
            }));
    }

    private onEnd(): void {
        this.hideLoader();
    }

    private showLoader(): void {
        console.log("Showing loader");
        this.loaderService.show();
    }

    private hideLoader(): void {
        console.log("Hiding loader");
        this.loaderService.hide();
    }
}