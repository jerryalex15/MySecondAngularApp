import { ActivatedRouteSnapshot , CanActivate , RouterStateSnapshot, UrlTree ,Router} from '@angular/Router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService , private router: Router){ }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
        if (this.authService.isAuth) return true;
        else this.router.navigate(['/auth']);
        return true;
    }
}