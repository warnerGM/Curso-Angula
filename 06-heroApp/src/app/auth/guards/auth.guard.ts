import {  inject} from '@angular/core';

import { Observable, tap } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn,  Route,  Router, RouterStateSnapshot, UrlSegment } from '@angular/router';


const checkAuthStatus = (): boolean | Observable<boolean> => {
    //se inyectan el AuthService y el Router
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);
   
    return authService.checkauthtecation().pipe(
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          router.navigate(['./auth/login']);
        }
      })
    );
  };


export const canActivateGuard: CanActivateFn = ( //Hay que tener en cuenta el tipado CanActiveFn
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {

  return checkAuthStatus();
};
 
export const canMatchGuard: CanMatchFn = ( //Tipado CanMatchFN
  route: Route,
  segments: UrlSegment[]
) => {
  console.log('CanMatch');
  console.log({ route, segments });
 
  return checkAuthStatus();
};