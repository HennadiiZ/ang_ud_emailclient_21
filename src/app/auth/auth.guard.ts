import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, skipWhile, take, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    // return false;

    // return new Observable((subscriber) => {
    //   subscriber.next(true);
    //   subscriber.complete();
    // })

    return this.authService.signedInBehSubj$
          .pipe(
            skipWhile(value => value === null as any),
            take(1),
            tap((authenticated) => {
              if(!authenticated) {
                this.router.navigateByUrl('/');
              }
            })
          )
  }

}
