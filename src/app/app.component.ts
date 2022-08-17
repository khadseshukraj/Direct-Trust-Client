//import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
//import { Router } from '@angular/router';
//import { SidebarService } from './layout/services/sidebar.service';
//import { StorageHelper } from './core/services/storage-helper.service';
//import { ApplicationHeaderService } from 'src/app/layout/services/application-header.service';
//import { ModalStaticClass } from './modules/shared/components/modal/ModalStaticClass';
//import { MatDialog } from "@angular/material";
//import { UserIdleService } from 'angular-user-idle';
//import { Observable } from 'rxjs';

//@Component({
//  selector: 'app-root',
//  templateUrl: './app.component.html',
//  styleUrls: ['./app.component.scss']
//})

//export class AppComponent implements OnInit {

//  constructor(private _applicationHeaderService: ApplicationHeaderService, private modalDialog: MatDialog, private _userIdleService: UserIdleService,
//    private _router: Router) { }

//  showhideApp: boolean = true;
//  loadingData: boolean = false;
//  errorMessage: string = "Your session will expire after 2 mins, please save your data or it will be lost.";

//  @HostListener('window:beforeunload')
//  canDeactivate(): Observable<boolean> | boolean {
//    return true;
//    // insert logic to check if there are pending changes here;
//    // returning true will navigate without confirmation
//    // returning false will show a confirm dialog before navigating away
//  }

//  ngOnInit() {
//    this._applicationHeaderService.changeUserRoleasObservable.subscribe(
//      response => {
//        if (response) {
//          this.showhideApp = false;
//          this.loadingData = true;
//          setTimeout(() => {
//            this.loadingData = false;
//            this.showhideApp = true;
//          }, 1000);
//        }
//      });


//    this._userIdleService.startWatching();
//    this._userIdleService.onTimerStart().subscribe(count => {
//      if (!(this._router.url == '/logout/true' || this._router.url == '/logout/false') && count != null && count == 1) {
//        ModalStaticClass.show(this.modalDialog, "", "Warning", this.errorMessage, 0, false, 1, "400px", 2).subscribe(response => {
//            if (response) {
//            this._userIdleService.stopWatching();
//            this._userIdleService.startWatching();
//          }
//        });
//      }
//    });
//    this._userIdleService.onTimeout().subscribe(() => {
//      this.modalDialog.closeAll();
//      this._router.navigate(['/logout', true]);
//    });
//  }

//}
import { Component, OnInit, ViewChild, HostListener, ChangeDetectorRef, AfterContentChecked } from "@angular/core";
import { Router } from '@angular/router';
import { SidebarService } from './layout/services/sidebar.service';
import { StorageHelper } from './core/services/storage-helper.service';
import { ApplicationHeaderService } from 'src/app/layout/services/application-header.service';
import { ModalStaticClass } from './modules/shared/components/modal/ModalStaticClass';
import { MatDialog } from "@angular/material";
import { UserIdleService } from 'angular-user-idle';
import { Observable } from 'rxjs';
import { IUserDetails, IDropdown } from './modules/shared/interfaces/icommon';


import $ from 'jquery';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    constructor(private _applicationHeaderService: ApplicationHeaderService, private modalDialog: MatDialog, private _userIdleService: UserIdleService,
        private _storageHelper: StorageHelper, private _sideBarService: SidebarService, private cdr: ChangeDetectorRef,
        private _router: Router) { }

    showhideApp: boolean = true;
    loadingData: boolean = false;
    errorMessage: string = "Your session will expire after 2 mins, please save your data or it will be lost.";
    showSidebar: boolean = true;
    activeState: string = "dashboard";

    @HostListener('window:beforeunload')
    canDeactivate(): Observable<boolean> | boolean {
        return true;
        // insert logic to check if there are pending changes here;
        // returning true will navigate without confirmation
        // returning false will show a confirm dialog before navigating away
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

                if (this._router.url == "/logout/false" || this._router.url == "/logout/true") {
                    this.showLoggedInUserDetails = false;
                    this.showAdminToggleButton = false;
                    this.loggedInUserDetails = {};
                }
            })

        //this._applicationHeaderService.changeUserRoleasObservable.subscribe(
        //    response => {
        //        if (response) {
        //            this.showhideApp = false;
        //            this.loadingData = true;
        //            setTimeout(() => {
        //                this.loadingData = false;
        //                this.showhideApp = true;
        //                console.log("showhideApp" + response);
        //            }, 1000);
        //        }
        //    });
       
        this._sideBarService.showSideBarAsObservable.subscribe(
            response => {
                debugger;
               // this.showSidebar = response;
                setTimeout(() => {
                    this.loadingData = false;
                    this.showSidebar = response;
                   // console.log("showSidebar" + this.showSidebar);
                }, 1000);

            })

        this._sideBarService.activeState.asObservable().subscribe(
            response => {
                this.activeState = response;
                console.log('activestate' + this.activeState);
                this._sideBarService.editSidebarShowValue(true);
            }
        )


        this._userIdleService.startWatching();
        this._userIdleService.onTimerStart().subscribe(count => {
            if (!(this._router.url == '/logout/true' || this._router.url == '/logout/false') && count != null && count == 1) {
                ModalStaticClass.show(this.modalDialog, "", "Warning", this.errorMessage, 0, false, 1, "400px", 2).subscribe(response => {
                    if (response) {
                        this._userIdleService.stopWatching();
                        this._userIdleService.startWatching();
                    }
                });
            }
        });
        this._userIdleService.onTimeout().subscribe(() => {
            this.modalDialog.closeAll();
            this._router.navigate(['/logout', true]);
        });

    }
    toggleSidebar() {
       
        let value = $('#sidebar').css('left');
        if (value === '0px') {
            //$('.toggler').addClass('collapsed');
            //$('#sidebar').animate({
            //    left: "-350px"
            //}, 300)
        } else {
            $('.toggler').removeClass('collapsed');
            $('#sidebar').animate({
                left: "0px"
            }, 500)
        }
    }
    closeSidebar() {
       
            $('.toggler').addClass('collapsed');
            $('#sidebar').animate({
                left: "-300px"
            }, 500) 
    }
   
    ngAfterViewInit() {

        this.cdr.detectChanges();
        //this._sideBarService.showSideBarAsObservable.subscribe(
        //    response => {
        //        this.showSidebar = response;
        //        setTimeout(() => {
        //            this.loadingData = false;
        //            this.showSidebar = response;
        //            console.log("showSidebar" + this.showSidebar);
        //        }, 1000);

        //    })
    }
    logOut() {
        this._router.navigate(['/logout', false]);
    }
    navigateToFigOrBuyerDashboard() {
        this._router.navigateByUrl("/actions");
    }
    //ngAfterContentChecked(): void {
    //    this.cdr.detectChanges();
    //}
    ngDestory() {
        $('.toggler').addClass('collapsed');
        $('#sidebar').animate({
            left: "-300px"
        }, 300)
    }
}
