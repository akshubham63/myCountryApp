import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable, exhaustMap, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthService){}

  intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler){
    return this._authService.user.pipe(take(1), exhaustMap(user => {
        if(!user){
            return httpHandler.handle(httpRequest);
        }
        const modifiedReq = httpRequest.clone({
            params: new HttpParams().set('auth', user.token)
        })
        return httpHandler.handle(modifiedReq);
    }));
  }
}
