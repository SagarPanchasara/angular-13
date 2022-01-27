import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private router: Router) { }

  isAuthenticated(from?: string): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    this.router.navigate(['login'], { queryParams: { from } });
    return false;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthenticated(segments.map(e => e.path).join('/'));
  }
}
