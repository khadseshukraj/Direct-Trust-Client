import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ApplicationHeaderService } from '../../services/application-header.service';
import { IUserDetails, IDropdown } from '../../../modules/shared/interfaces/icommon';
import { StorageHelper } from '../../../core/services/storage-helper.service';
import { ModalStaticClass } from 'src/app/modules/shared/components/modal/ModalStaticClass';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private _router: Router, private _applicationHeaderService: ApplicationHeaderService, private _storageHelper: StorageHelper, private _activatedRoute: ActivatedRoute,
        private modalDialog: MatDialog) {

    }

    loggedInUserDetails: IUserDetails = {};
    showLoggedInUserDetails: boolean = true;
    showAdminToggleButton: boolean = false;
    userRoleList?: IDropdown[];
    userRole: string;

    ngOnInit() {
        this._applicationHeaderService.castLoggedInUserDetails.subscribe(
            response => {
                this.loggedInUserDetails = <IUserDetails>response;
                this.showLoggedInUserDetails = true;
                this.loggedInUserDetails = <IUserDetails>(this._storageHelper.getItem("loggedInUserDetails"));
                if (this.loggedInUserDetails == null) {
                    this.showLoggedInUserDetails = false;
                    this.showAdminToggleButton = false;
                    this.loggedInUserDetails = {};
                }
                else {
                    // if (this.loggedInUserDetails.Roles.some(r => r.toLowerCase().includes("admin"))) {
                    //     if (this._storageHelper.getItem("selectedRole") != null && this._storageHelper.getItem("selectedRole") != undefined && this._storageHelper.getItem("selectedRole") != "") {
                    //         this.userRole = this._storageHelper.getItem("selectedRole");
                    //         if (this.userRole.toLowerCase().includes("fig")) {
                    //             //this.userRoleList = [{ ID: "figAdmin", Value: "FIG Admin" }, { ID: "fig_buyer", Value: "Buyer" }, { ID: "fig_gso", Value: "GSO" }];
                    //             this.userRoleList = [{ ID: "figAdmin", Value: "FIG Admin" }];
                    //         }
                    //         else {
                    //             this.userRoleList = [{ ID: "fddAdmin", Value: "FDD Admin" }, { ID: "admin_buyer", Value: "Buyer" }, { ID: "admin_fna", Value: "F&A" }];
                    //         }
                    //     }
                    //     else {
                    //         this.userRole = "fddAdmin";
                    //         this.userRoleList = [{ ID: "fddAdmin", Value: "FDD Admin" }, { ID: "admin_buyer", Value: "Buyer" }, { ID: "admin_fna", Value: "F&A" }];
                    //         this._storageHelper.setItem("selectedRole", "fddAdmin");
                    //     }
                    //     this.showAdminToggleButton = true;
                    // }
                }
                //}
                if (this._router.url == "/logout/false" || this._router.url == "/logout/true") {
                    this.showLoggedInUserDetails = false;
                    this.showAdminToggleButton = false;
                    this.loggedInUserDetails = {};
                }
            })

        this._applicationHeaderService.switchUserasObservable.subscribe(
            response => {
                if (response != null) {
                    if (this.loggedInUserDetails != null && this.loggedInUserDetails != undefined && this.loggedInUserDetails != "" && Object.keys(this.loggedInUserDetails).length > 0) {
                        //if (this.loggedInUserDetails.Roles.some(r => r.toLowerCase().includes("admin"))) {
                        if (this.loggedInUserDetails.Roles.toLowerCase().includes("admin")) {
                            if (response == "fig") {
                                this._storageHelper.setItem("selectedRole", "figAdmin");
                                this.userRole = "figAdmin";
                                //this.userRoleList = [{ ID: "figAdmin", Value: "FIG Admin" }, { ID: "fig_buyer", Value: "Buyer" }, { ID: "fig_gso", Value: "GSO" }];
                                this.userRoleList = [{ ID: "figAdmin", Value: "FIG Admin" }];
                            }
                            else if (response == "fdd") {
                                this._storageHelper.setItem("selectedRole", "fddAdmin");
                                this.userRole = "fddAdmin";
                                this.userRoleList = [{ ID: "fddAdmin", Value: "FDD Admin" }, { ID: "admin_buyer", Value: "Buyer" }, { ID: "admin_fna", Value: "F&A" }];
                            }
                        }
                        else if (this.loggedInUserDetails.Roles.toLowerCase().includes("admin")) {
                            if (response == "fig") {
                                this._storageHelper.setItem("selectedRole", "figAdmin");
                                this.userRole = "figAdmin";
                                //this.userRoleList = [{ ID: "figAdmin", Value: "FIG Admin" }, { ID: "fig_buyer", Value: "Buyer" }, { ID: "fig_gso", Value: "GSO" }];
                                this.userRoleList = [{ ID: "figAdmin", Value: "FIG Admin" }];
                            }
                            else if (response == "fdd") {
                                this._storageHelper.setItem("selectedRole", "fddAdmin");
                                this.userRole = "fddAdmin";
                                this.userRoleList = [{ ID: "fddAdmin", Value: "FDD Admin" }, { ID: "admin_buyer", Value: "Buyer" }, { ID: "admin_fna", Value: "F&A" }];
                            }
                        }
                        
                        sessionStorage.removeItem("basicFilterDetails");
                        sessionStorage.removeItem("fddFilterParams");
                        sessionStorage.removeItem("advancedFilterDropdowns");
                        sessionStorage.removeItem("filterMapData");
                        sessionStorage.removeItem("contractFlterDetails");
                        sessionStorage.removeItem("fddFilterDropdowns");
                        sessionStorage.removeItem("nssRnO");
                        sessionStorage.removeItem("totalPPVForecast");
                        sessionStorage.removeItem("totalImpact");
                        sessionStorage.removeItem("commodities");
                        sessionStorage.removeItem("nssCommitted");
                    }
                }
            })

    }

    logOut() {
        this._router.navigate(['/logout', false]);
    }

    changeUserRole() {
        if (this._router.url.includes("/projects/projectcreation") || this._router.url.includes("/contracts/contractcreation")) {
            ModalStaticClass.show(this.modalDialog, "", "Module Switch", "All unsaved progress would be lost and you will be redirected to dashboard. Continue?", 2, false, 1, "400px").subscribe(response => {
                if (response.result == 'yes') {
                    this.handleRoleSwitch();
                }
                else {
                    setTimeout(() => {
                        this.userRole = this._storageHelper.getItem("selectedRole");
                    }, 1000);                    
                    console.log(this.userRole);
                    console.log(this.userRoleList)
                }
            })
        }
        else {
            this.handleRoleSwitch();
        }

        this._applicationHeaderService.editLoggedInUserDetails(this.loggedInUserDetails);
    }

    handleRoleSwitch() {
        this._storageHelper.setItem("selectedRole", this.userRole);
        sessionStorage.removeItem("basicFilterDetails");
        sessionStorage.removeItem("advancedFilterDropdowns");
        sessionStorage.removeItem("filterMapData");
        sessionStorage.removeItem("contractFlterDetails");
        sessionStorage.removeItem("dashboardData");
        sessionStorage.removeItem("fddFilterParams");
        sessionStorage.removeItem("fddFilterDropdowns");
        sessionStorage.removeItem("nssRnO");
        sessionStorage.removeItem("totalPPVForecast");
        sessionStorage.removeItem("totalImpact");
        sessionStorage.removeItem("commodities");
        sessionStorage.removeItem("nssCommitted");
        this._applicationHeaderService.changeUserRolefromMenu(this.userRole);
        if (this._router.url == "/dashboard") {
            this._router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
                this._router.navigateByUrl("/dashboard"));
        }
        else {
            this._router.navigateByUrl("dashboard");
        }
    }
}
