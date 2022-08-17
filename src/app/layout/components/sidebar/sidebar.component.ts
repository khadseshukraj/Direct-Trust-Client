import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { StorageHelper } from 'src/app/core/services/storage-helper.service';
import { Router } from '@angular/router';
import { ApplicationHeaderService } from '../../services/application-header.service';
import { ModalStaticClass } from 'src/app/modules/shared/components/modal/ModalStaticClass';
import { MatDialog } from '@angular/material';
import { IUserDetails, IUserRating } from 'src/app/modules/shared/interfaces/icommon';
import { SharedService } from '../../../modules/shared/services/shared.service';

export interface ISidebarMenu {
    Title?: string;
    Description?: string;
    IconClass?: string;
    IconBgColor?: string;
    CardToolTip?: string;
    UserSwitchMenu?: string;
    isSelected?: boolean;
    DivBGColor?: string;

}
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

    constructor(private _sideBarService: SidebarService, private _storagehelper: StorageHelper, private _router: Router,
        public _applicationHeaderService: ApplicationHeaderService, private modalDialog: MatDialog,
        private _sharedService: SharedService) {
    }

    showSidebar: boolean = true;
    activeState: string = "dashboard";
    folderIconText: string = "Projects";
    loggedInUserDetails: IUserDetails = {};
    showModuleSwitch: boolean = false;
    selectedModule?: string = "fdd";
    ratingDetails?: IUserRating = {};
    bgColor: string = "";
    fontColor: string = "";
    supportTeam: string = "";

    menuList: ISidebarMenu[] = [
        {
            Title: "Forecast Driver Dashboard", IconClass: "icon-FDD", DivBGColor: "#ffffff",
            IconBgColor: "#1dd1a1", UserSwitchMenu: "fdd", isSelected: false
        },
        {
            Title: "Feedstock Impact Guidance", IconClass: "icon-FIG", DivBGColor: "#ffffff",
            IconBgColor: "#0776ff", UserSwitchMenu: "fig", isSelected: false
        },
        {
            Title: "Reports", IconClass: "icon-reports", DivBGColor: "#ffffff",
            IconBgColor: "#ff7f50", UserSwitchMenu: "fddrep", isSelected: false
        }
    ];

    ngOnInit() {
        
        // if (this._storagehelper.getItem("supportTeam") == null || this._storagehelper.getItem("supportTeam") == undefined ||
        //     this._storagehelper.getItem("supportTeam") == "") {
        //     this._sharedService.supportTeamSubject.asObservable().subscribe(response => {
        //         this.supportTeam = response;
        //     })
        // }
        // else {
        //     this.supportTeam = this._storagehelper.getItem("supportTeam");
        // }

        this._applicationHeaderService.castLoggedInUserDetails.subscribe(
            response => {
                this.loggedInUserDetails = <IUserDetails>response;
                this.loggedInUserDetails = <IUserDetails>(this._storagehelper.getItem("loggedInUserDetails"));
                // if (this.loggedInUserDetails == null) {
                //     this.showModuleSwitch = false;
                //     this.loggedInUserDetails = {};
                // }
                // else {
                //     if (this.loggedInUserDetails.Roles.some(r => r.toLowerCase().includes("admin")) || this.loggedInUserDetails.Roles.some(r => r.toLowerCase().includes("fig_buyer")) ||
                //         this.loggedInUserDetails.Roles.some(r => r.toLowerCase().includes("fig_fna")) || this.loggedInUserDetails.Roles.some(r => r.toLowerCase() == "fig_gso")) {
                //         this.showModuleSwitch = true;
                //         if (this._storagehelper.getItem("selectedModule") != null && this._storagehelper.getItem("selectedModule") != undefined && this._storagehelper.getItem("selectedModule") != "") {
                //             this.selectedModule = this._storagehelper.getItem("selectedModule");
                //         }
                //         else {
                //             this.selectedModule = "fdd";
                //             this._storagehelper.setItem("selectedModule", this.selectedModule);
                //             this.switchUserRoleView(this.selectedModule);
                //         }
                //         for (var i = 0; i < this.menuList.length; i++) {
                //             if (this.menuList[i].UserSwitchMenu == this.selectedModule) {
                //                 this.menuList[i].isSelected = true;
                //             }
                //             else {
                //                 this.menuList[i].isSelected = false;
                //             }
                //         }
                //     }
                //     else {
                //         if (this._storagehelper.getItem("selectedModule") != null && this._storagehelper.getItem("selectedModule") != undefined && this._storagehelper.getItem("selectedModule") != "") {
                //             this.selectedModule = this._storagehelper.getItem("selectedModule");
                //         }
                //         else {
                //             this.selectedModule = "fdd";
                //             this._storagehelper.setItem("selectedModule", this.selectedModule);
                //         }
                //     }
                //     if (this.selectedModule == "fdd") {
                //         this.folderIconText = "Projects";
                //     }
                //     else {
                //         this.folderIconText = "Contracts";
                //     }
                // }

                if (this.loggedInUserDetails != null && this.loggedInUserDetails != undefined && Object.keys(this.loggedInUserDetails).length > 0) {
                    this.ratingDetails.LoginName = this.loggedInUserDetails.LoginName;
                }
            });
        this._sideBarService.showSideBarAsObservable.subscribe(
            response => {
                this.showSidebar = response;
            })

        this._sideBarService.activeState.asObservable().subscribe(
            response => {
                this.activeState = response;
            }
        )
    }

    navigateToProjectOrContract() {
        if (this.folderIconText == "Contracts") {
            this._router.navigateByUrl("/contracts");
        }
        else if (this.folderIconText == "Projects") {
            this._router.navigateByUrl("/projects");
        }
    }


    switchUserRoleView(switchUserRole) {
        if (this.selectedModule == switchUserRole || switchUserRole == "fddrep") {
            return;
        }
        else {
            if (this._router.url.includes("/projects/projectcreation") || this._router.url.includes("/contracts/contractcreation")) {
                ModalStaticClass.show(this.modalDialog, "", "Module Switch", "All unsaved progress would be lost and you will be redirected to dashboard. Continue?", 2, false, 1, "400px").subscribe(response => {
                    if (response.result == 'yes') {
                        this.selectedModule = switchUserRole;
                        this.handleRoleSwitch();
                    }
                });
            }
            else {
                this.selectedModule = switchUserRole;
                this.handleRoleSwitch();
            }
        }

        this._applicationHeaderService.editLoggedInUserDetails(this.loggedInUserDetails);
    }

    handleRoleSwitch() {
        for (var i = 0; i < this.menuList.length; i++) {
            if (this.menuList[i].UserSwitchMenu == this.selectedModule) {
                this.menuList[i].isSelected = true;
            }
            else {
                this.menuList[i].isSelected = false;
            }
        }
        if (this.selectedModule == "fdd") {
            this.folderIconText = "Projects";
        }
        else {
            this.folderIconText = "Contracts";
        }
        this._storagehelper.setItem("selectedModule", this.selectedModule);
        this._applicationHeaderService.switchUserView(this.selectedModule);
        if (this._router.url == "/dashboard") {
            this._router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
                this._router.navigateByUrl("/dashboard"));
        }
        else {
            this._router.navigateByUrl("dashboard");
        }
    }

    navigateToFigOrBuyerDashboard() {
        this._router.navigateByUrl("/actions");
    }
    navigateToCommodity() {
        this._router.navigateByUrl("/commodityImpact");
    }

    submitFeedBack() {
        //this._sideBarService.saveRatingDetails(this.ratingDetails).subscribe(
        //    response => {
        //        if (response) {
        //            ModalStaticClass.show(this.modalDialog, "", "Success", "Your feedback was successfully submitted. Thank you!", 0, false, 0, "400px");
        //            this.ratingDetails.Comments = "";
        //            this.ratingDetails.Rating = null;
        //        }
        //    }
        //)
    }

    setHover(actionCard: ISidebarMenu) {
        actionCard.DivBGColor = actionCard.IconBgColor;
        this.fontColor = actionCard.IconBgColor;
        actionCard.IconBgColor = "#ffffff";
    }

    removeHover(actionCard: ISidebarMenu) {
        actionCard.DivBGColor = "#ffffff";
        actionCard.IconBgColor = this.fontColor;
    }
}
