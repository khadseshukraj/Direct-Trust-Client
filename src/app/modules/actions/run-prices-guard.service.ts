import { Injectable } from '@angular/core';
import { Router, CanLoad, UrlSegment, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IUserDetails } from '../../modules/shared/interfaces/icommon';
import { Route } from '@angular/compiler/src/core';
import { StorageHelper } from '../../core/services/storage-helper.service';
import { ModalStaticClass } from '../shared/components/modal/ModalStaticClass';
import { MatDialog } from '@angular/material';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RunPricesGuardService implements CanActivate {

    loggedInUserDetails: IUserDetails = {};
    selectedRole: string = "";
    authorizationMessage: string = "";

    constructor(private _router: Router, private storageHelper: StorageHelper, private modalDialog: MatDialog) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        if (this.storageHelper.getItem('loggedInUserDetails') != null) {
            this.loggedInUserDetails = this.storageHelper.getItem('loggedInUserDetails');
        }
        if (this.storageHelper.getItem('selectedRole') != null) {
            this.selectedRole = this.storageHelper.getItem('selectedRole');
        }

        if (this.loggedInUserDetails != null && this.loggedInUserDetails != undefined) {
            this.authorizationMessage = this.authorizeUser(this.selectedRole, this.loggedInUserDetails.Roles[0]);
        }
        else {
            this.authorizationMessage = this.authorizeUser(this.selectedRole, "");
        }

        return this.authorizationMessage == "" ?
            true :
            ModalStaticClass.show(this.modalDialog, "", "Warning", this.authorizationMessage, 0, false, 1, "400px").pipe(map(result => {
                this._router.navigateByUrl(this.storageHelper.getItem("currentState"));
                return false;
        }));
    }

    authorizeUser(selectedRole: string, actualRole: string): string {                
        if (selectedRole.toLowerCase().includes("figadmin") || selectedRole.toLowerCase().includes("fig_admin")) {
            return "";
        }
        else {
            if (actualRole.toLowerCase().includes("fig_admin") || actualRole.toLowerCase().includes("figadmin")) {
                return "Please switch to FIG admin role for running prices.";
            }
            else {
                return "You are not authorized for running prices.";
            }
        }
    }
}
