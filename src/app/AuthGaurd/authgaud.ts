import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {NetworkService} from '../services/network.service';
@Injectable()
export class AuthguardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.auth.status().subscribe(user => {
      if (user) {
        console.log('user');
        return true;
      } else {
        console.log('no user');
        this.router.navigateByUrl('/login');
        return false;
      }
    });
    return true;
  }
  constructor(private router: Router, private auth: NetworkService){

  }
}
