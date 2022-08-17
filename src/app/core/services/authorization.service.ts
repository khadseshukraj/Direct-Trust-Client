import { Injectable, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { IUserDetails } from '../../modules/shared/interfaces/icommon';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StorageHelper } from '../services/storage-helper.service';
import { ApiService } from './api.service';

@Injectable()
export class AuthorizationService {

  constructor(private _cookieService: CookieService, private _httpClient: HttpClient, private _router: Router,
    private storageHelper: StorageHelper, private _apiService: ApiService) { }

  cookieValue: string = 'UNKNOWN';
  loggedInUserDetails: IUserDetails = {};
  userDetails: any;

  getAuthorizationToken(): string {
    this.userDetails = this.storageHelper.getItem('loggedInUserDetails');
    if (this.userDetails == null) {
      //return 'basic ' + btoa(atob(this._cookieService.get('samlData')) + ':SGRA');
      return 'basic ' + btoa(this._cookieService.get('userName') + ':ATLAS');
    }
    else {
      return 'basic ' + btoa(this.userDetails.LoginName + ':ATLAS');
    }
  }  

}
