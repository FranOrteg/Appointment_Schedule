import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('pasa por interceptors')
    //Sacar token de localStorage
    const token = localStorage.getItem('token') || '';
    //Insertar token en angular
    const req = request.clone({
      headers: request.headers.set('Authorization', token)
    });
    return next.handle(req);
  }
}
