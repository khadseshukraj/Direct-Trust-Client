import { Injectable } from '@angular/core';
import { AuthorizationService } from './authorization.service';
import { Router, CanLoad, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { IUserDetails } from '../../modules/shared/interfaces/icommon';
import { StorageHelper } from '../services/storage-helper.service';
import { Route } from '@angular/compiler/src/core';

@Injectable()
export class AuthGuardService implements CanLoad {

  loggedInUserDetails: IUserDetails = {};

  constructor(private _router: Router, private storageHelper: StorageHelper) { }

  canLoad(route: Route, segements: UrlSegment[]): Observable<boolean> {
    this.loggedInUserDetails = this.storageHelper.getItem('loggedInUserDetails');
    if (this.loggedInUserDetails != null) {
      return of(true);
    }
    else {
      this._router.navigateByUrl('/login');
      return of(false);
    }
  }
}
