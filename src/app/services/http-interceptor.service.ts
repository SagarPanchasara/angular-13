import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  private calls = 0;

  constructor(private router: Router, private spinner: NgxSpinnerService) { }

  showSpinner(): void {
    this.calls++;
    this.spinner.show();
  }

  hideSpinner(): void {
    this.calls--;
    if (this.calls <= 0) {
      this.spinner.hide();
    }
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string | null = localStorage.getItem('token');

    if (token) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    } else if (request.headers.get('Content-Type') === 'multipart/form-data') {
      request = request.clone({ headers: request.headers.delete('Content-Type') });
    }

    if (!request.headers.has('Accept')) {
      request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
    }

    console.log('intercepting...', request);

    this.showSpinner();
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log(`response`, event);

          if (event.body.isSessionExpired) {
            this.router.navigateByUrl(`/login`);
          }

          this.hideSpinner();

        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log(`error`, error);

        this.hideSpinner();

        return throwError(error);
      }));
  }

}