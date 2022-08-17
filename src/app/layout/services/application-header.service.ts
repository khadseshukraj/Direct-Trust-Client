import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUserDetails, iNotificationViewModel, iReadNotification } from '../../modules/shared/interfaces/icommon';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
    providedIn: 'root'
})
export class ApplicationHeaderService {

    constructor(public apiService: ApiService) {

    }

    loggedInUserDetails = new BehaviorSubject<IUserDetails>(null);
    castLoggedInUserDetails = this.loggedInUserDetails.asObservable();

    switchUser = new BehaviorSubject<string>(null);
    switchUserasObservable = this.switchUser.asObservable();

    changeUserRole = new BehaviorSubject<string>(null);
    changeUserRoleasObservable = this.changeUserRole.asObservable();

    editLoggedInUserDetails(newValue: IUserDetails) {
        this.loggedInUserDetails.next(newValue);
    }

    switchUserView(newValue: string) {
        this.switchUser.next(newValue);
    }


    changeUserRolefromMenu(newValue: string) {
        this.changeUserRole.next(newValue);
    }

    getNotifications(tNumber: string, projectID: string = null, selectedRole: string = null): Observable<iNotificationViewModel> {
        return this.apiService.getDataWithParams("Common/Notifications", {
            tNumber: tNumber,
            projectID: projectID,
            selectedRole: selectedRole
        });
    }

    readNotification(readNotification: iReadNotification): Observable<boolean> {
        return this.apiService.postData("Common/ReadNotification", readNotification);
    }
}
