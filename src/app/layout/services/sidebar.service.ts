import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { IUserRating } from 'src/app/modules/shared/interfaces/icommon';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private _apiService: ApiService) { }

  showSideBar = new BehaviorSubject<boolean>(true);
  showSideBarAsObservable = this.showSideBar.asObservable();

  activeState = new BehaviorSubject<string>("dashboard");

  editSidebarShowValue(newValue: boolean) {
    this.showSideBar.next(newValue);
  }

  setActiveState(newValue: string) {
    this.activeState.next(newValue);
  }

  saveRatingDetails(userRating: IUserRating) {
    return this._apiService.postData("User/Save/Rating", userRating);
  }
}
