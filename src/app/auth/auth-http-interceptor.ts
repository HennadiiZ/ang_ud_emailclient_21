import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { filter, Observable, tap } from "rxjs";

@Injectable({ providedIn: 'root' })

export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // return null as any;
    // console.log("---",request);

    // Modify or log the outgoing request
    const modifiedRequest = request.clone({
      withCredentials: true
    })
    // console.log("+++", modifiedRequest);
    return next.handle(modifiedRequest) // <---- this is an observable
          // .pipe(
          //   filter(val => val.type === HttpEventType.Sent),

          //   tap(val => {
          //     // console.log("===",val);
          //     // if(val.type === HttpEventType.Sent) {
          //     //   console.log("Request was sent to server");
          //     // }

          //     // if(val.type === HttpEventType.Response) {
          //     //   console.log("Got a response from server", val);
          //     // }
          //   })
          // )
  }

}
