import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
   constructor() {} 
   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1RTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiJjNGU5YzhiZS1mZmRkLTRlZDAtYTZiYS02OTlkM2RmNjk4NGYiLCJpYXQiOiIyMS8wMy8yMDIzIDAxOjU5OjA1IiwiVXNlcklkIjoiMiIsIkRpc3BsYXlOYW1lIjoiSmVhbiIsIlVzZXJOYW1lIjoiRmlkZWxlIiwiRW1haWwiOiJmaWRlbGU5OTlAZ21haWwuY29tIiwiZXhwIjoxNjc5MzY0NTQ1LCJpc3MiOiJKV1RBdXRoZW50aWNhdGlvblNlcnZlciIsImF1ZCI6IkpXVFNlcnZpY2VQb3N0bWFuQ2xpZW50In0.j6P9mjUNRutwrgiepbWfTIaec1B2gdCi5yjlqcMApR0";
  
      if (token){
         request = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${token}`)
                                    .set('Access-Control-Allow-Origin', '*') ,
            //setHeaders: { Authorization: `Bearer ${token}`}
            //Access-Control-Allow-Origin: ''
         });
      }
  
      return next.handle(request).pipe(
         catchError((err) => {
            if (err instanceof HttpErrorResponse) {
               if (err.status === 401) {
               // redirect user to the logout page
               }
            }
            return throwError(err);
         })
      )
   }
}