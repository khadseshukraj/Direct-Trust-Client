import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { IUserAuthenticate } from '../../../app/modules/shared/interfaces/icommon';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class LoginService {

  constructor(private _apiService: ApiService) { }

  getLoggedInUserDetails(userName: string) {

    return this._apiService.getDataWithParams('User/User', {
      userName: userName
    })
  }
    getAuthenticateUserDetails(userName: string, password: string): Observable<IUserAuthenticate>  {

        return this._apiService.getDataWithParams('DirectTrustPatient/Authenticate', {
            userName: userName,
            password: password
        })
    }
    getUserDetails(userName: string): Observable<IUserAuthenticate> {

        return this._apiService.getDataWithParams('DirectTrustPatient/GetUserDetails', {
            userName: userName
           
        })
    }
    
}
