import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../services/authorization.service';
import { Observable } from 'rxjs';
import { IUserDetails } from '../../../modules/shared/interfaces/icommon';
import { CookieService } from 'ngx-cookie-service';
import { StorageHelper } from '../../services/storage-helper.service';
import { ApplicationHeaderService } from '../../../layout/services/application-header.service';
import { LoginService } from '../../services/login.service';
import { SidebarService } from 'src/app/layout/services/sidebar.service';
import { ModalStaticClass } from '../../../modules/shared/components/modal/ModalStaticClass';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { environment } from './../../../../environments/environment';
//import appConfig from '../../../../assets/appConfig.json';
import { ConfigService } from '../../services/config';
declare var gapi: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    config: any;
    clientId: string;
    constructor(private _ConfigService: ConfigService,private _authService: AuthorizationService, private _router: Router, private _cookieService: CookieService, private modalDialog: MatDialog,
        private storageHelper: StorageHelper, private _applicationHeaderService: ApplicationHeaderService, private _loginService: LoginService,
        private _sidebarService: SidebarService)

    {
        this.config = _ConfigService.loadJSON('./assets/config.json');
        this.clientId = this.config.ClientID;
       
       
    }

    cookieValue: string;
    relayState: string;
    loggedInUserDetails: IUserDetails = {};
    userName: string = '';
    password: string = '';
    loadingData: boolean = false;

    gapiSetup: any;
    authInstance: any;
    googleuser: any;
    googlerror: any;
    googleUser: gapi.auth2.GoogleUser;

    //Google Autghentication code commented
    async initGoogleAuth(): Promise<void> {
        //  Create a new Promise where the resolve 
        // function is the callback passed to gapi.load
        debugger;
        const pload = new Promise((resolve) => {
            gapi.load('auth2', resolve);
        });

        // When the first promise resolves, it means we have gapi
        // loaded and that we can call gapi.init
        return pload.then(async () => {
            debugger;
            await gapi.auth2
                .init({

                    client_id: this.clientId,
                  //client_id: '439128424113-psvh4v5dosvnstbm3u816krvejeoojgs.apps.googleusercontent.com',
                    ux_mode: 'popup'
                   // ux_mode: 'redirect',
                   // redirect_uri: 'http://localhost:50001/'
                })
                .then(auth => {

                    this.gapiSetup = true;
                    this.authInstance = auth;
                });
        });
    }
    async authenticate(): Promise<gapi.auth2.GoogleUser> {
        // Initialize gapi if not done yet
        if (!this.gapiSetup) {
            await this.initGoogleAuth();
        }

        // Resolve or reject signin Promise
        return new Promise(async () => {
            await this.authInstance.signIn().then(
                user => {
                    this.googleuser = user;
                    this.googleAuthenticatedUserDetails(this.authInstance.currentUser.get().getBasicProfile().getEmail());
                },
                error => this.googlerror = error);
        });
    }
    async checkIfUserAuthenticated(): Promise<boolean> {
        // Initialize gapi if not done yet
        if (!this.gapiSetup) {
            await this.initGoogleAuth();
        }

        return this.authInstance.isSignedIn.get();
    }
    signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
            //ModalStaticClass.show(this.modalDialog, "", "Success", "you are successfully Sign Out.Please Login with other Google Account", 0, false, 1, "500px", 1);
            //alert("you are successfully Sign Out.Please Login with other Google Account");
            window.open("https://mail.google.com/mail/u/0/?logout&hl=en", '_blank', 'resizable');
        });
    }
    googleAuthenticatedUserDetails(googleusername: any) {
        this.loadingData = true;
        console.log("googleusername" + googleusername);
        //if (googleusername == '' || googleusername == undefined) {

        //googleusername = 'gillian.charbeneau@team-rehab.com';
        //googleusername = 'shukraj.khadse@team-rehab.com';
        //googleusername ='abhijeet.karve@team-rehab.com'
        // }
        if (this.storageHelper.getItem('loggedInUserDetails') == null) {
            //this._cookieService.set('userName', this.userName);
            this.cookieValue = this._cookieService.get('userName');

            //if (this.cookieValue != "" && this.cookieValue != undefined) {

            this._loginService.getUserDetails(googleusername).subscribe(response => {
                this.loadingData = false;
                if (response != null) {
                    this._cookieService.delete("userName");
                    this.loggedInUserDetails.CommonName = response.FirstName + ' ' + response.LastName;
                    this.loggedInUserDetails.LoginName = response.UserID;
                    this.loggedInUserDetails.Roles = response.Role.trim();

                    if (this.loggedInUserDetails != null && this.loggedInUserDetails != undefined && Object.keys(this.loggedInUserDetails).length > 0) {
                        this.storageHelper.setItem("loggedInUserDetails", this.loggedInUserDetails);
                        this._applicationHeaderService.editLoggedInUserDetails(this.loggedInUserDetails);

                        this._router.navigateByUrl('/actions');
                    }
                    else {
                        ModalStaticClass.show(this.modalDialog, "", "Error", "your google account does not have access to application", 0, false, 1, "500px", 1);
                        this._router.navigateByUrl('/unauthorized');

                        //ModalStaticClass.show(this.modalDialog, "", "Confirm", "No Account Exist for this google user, Do you want to sign out from this account?", 2, false, 0, "500px", 3)
                        //    .subscribe(res => {
                        //        if (res.result == 'yes') {
                        //            this.signOut();
                        //            //if (this.gapiSetup) {
                        //            //    const pload = new Promise((resolve) => {
                        //            //        gapi.load('auth2', resolve);

                        //            //        // When the first promise resolves, it means we have gapi
                        //            //        // loaded and that we can call gapi.init
                        //            //        return pload.then(async () => {
                        //            //            await gapi.auth2
                        //            //                .init({ client_id: '480789291030-d1lrj1ir2v3gb28d417tl77ge0bk2o7p.apps.googleusercontent.com' })
                        //            //                .then(auth => {
                        //            //                    this.gapiSetup = true;
                        //            //                    this.authInstance = auth;
                        //            //                    return new Promise(async () => {
                        //            //                        await this.authInstance.signOut().then(
                        //            //                            user => {
                        //            //                                this.authenticate();
                        //            //                            },
                        //            //                            error => this.googlerror = error);
                        //            //                    });
                        //            //                });
                        //            //        });
                        //            //    });

                        //            //}
                        //        }
                        //        else {
                        //            this._router.navigateByUrl('/unauthorized');
                        //        }
                        //    });

                    }
                } else {
                    ModalStaticClass.show(this.modalDialog, "", "Error", "your google account does not have access to application", 0, false, 1, "500px", 1);
                    this._router.navigateByUrl('/unauthorized');
                    //ModalStaticClass.show(this.modalDialog, "", "Confirm", "No Account Exist for this google user, Do you want to sign out from this account?", 2, false, 0, "500px", 3)
                    //    .subscribe(res => {
                    //        if (res.result == 'yes') {
                    //            this.signOut();
                    //            //if (this.gapiSetup) {
                    //            //    const pload = new Promise((resolve) => {
                    //            //        gapi.load('auth2', resolve);
                    //            //        // When the first promise resolves, it means we have gapi
                    //            //        // loaded and that we can call gapi.init
                    //            //        return pload.then(async () => {
                    //            //            await gapi.auth2
                    //            //                .init({ client_id: '480789291030-d1lrj1ir2v3gb28d417tl77ge0bk2o7p.apps.googleusercontent.com' })
                    //            //                .then(auth => {
                    //            //                    this.gapiSetup = true;
                    //            //                    this.authInstance = auth;
                    //            //                    return new Promise(async () => {
                    //            //                        await this.authInstance.signOut().then(
                    //            //                            user => {
                    //            //                                this.authenticate();
                    //            //                            },
                    //            //                            error => this.googlerror = error);
                    //            //                    });
                    //            //                });
                    //            //        });
                    //            //    });


                    //            //}


                    //        }
                    //        else {
                    //            this._router.navigateByUrl('/unauthorized');
                    //        }
                    //    });
                }
            },
                err => {
                    this.loadingData = false;
                    this._router.navigateByUrl('/unauthorized');
                })
            //}
            //else {
            //    //redirect To PING URL
            //    //window.location.href = 'https://fedauthtst.pg.com/idp/startSSO.ping?PartnerSpId=https%3A%2F%2Fsigfadev.pg.com%3A8312%2Flogin&targetResource=';
            //    //window.location.href = 'https://fedauthtst.pg.com/idp/startSSO.ping?PartnerSpId=https%3A%2F%2Fsgraqa.pg.com%3A8212%2Flogin';
            //}
        }
        else {
            this.loggedInUserDetails = this.storageHelper.getItem('loggedInUserDetails');
            this._applicationHeaderService.editLoggedInUserDetails(this.loggedInUserDetails);
            console.log('here');
            //this.ProcessRelayStateData();
            this._router.navigateByUrl('/actions');
        }
    }
    //user.Qt.Au
    //Google Autghentication code commented
    nextButtonClicked() {
        // let encryptedRelayState = this._cookieService.get('relayState');
        // this.relayState = atob(encryptedRelayState);
        if (this.storageHelper.getItem('loggedInUserDetails') == null) {
            this._cookieService.set('userName', this.userName);
            this.cookieValue = this._cookieService.get('userName');
            //this.cookieValue = this._cookieService.get('samlData');
            //this.cookieValue = atob(this.cookieValue);
            if (this.cookieValue != "" && this.cookieValue != undefined) {
                // this.loadingData = true;
                //    this.loggedInUserDetails.CommonName=this.userName;
                //    this.loggedInUserDetails.LoginName=this.userName;
                //    this.storageHelper.setItem("loggedInUserDetails", this.loggedInUserDetails);

                //    this._applicationHeaderService.editLoggedInUserDetails(this.loggedInUserDetails);

                //     this._router.navigateByUrl('/dashboard');
                this._loginService.getAuthenticateUserDetails(this.userName, this.password).subscribe(response => {
                    this.loadingData = false;
                    if (response != null) {
                        this._cookieService.delete("userName");
                        this.loggedInUserDetails.CommonName = response.FirstName + ' ' + response.LastName;
                        this.loggedInUserDetails.LoginName = this.userName;
                        this.loggedInUserDetails.Roles = response.Role.trim();

                        if (this.loggedInUserDetails != null && this.loggedInUserDetails != undefined && Object.keys(this.loggedInUserDetails).length > 0) {
                            this.storageHelper.setItem("loggedInUserDetails", this.loggedInUserDetails);
                            this._applicationHeaderService.editLoggedInUserDetails(this.loggedInUserDetails);
                            // if (this.loggedInUserDetails.Roles.length > 0) {
                            //     for (var i = 0; i < this.loggedInUserDetails.Roles.length; i++) {

                            //         if (this.loggedInUserDetails.Roles[i].toLowerCase().includes("buyer") || this.loggedInUserDetails.Roles[i].toLowerCase().includes("gso")) {
                            //             this.storageHelper.setItem("selectedRole", "buyer");
                            //             break;
                            //         }
                            //         else if (this.loggedInUserDetails.Roles[i].toLowerCase().includes("fna")) {
                            //             this.storageHelper.setItem("selectedRole", "fna");
                            //             break;
                            //         }
                            //         else if (this.loggedInUserDetails.Roles[i].toLowerCase().includes("admin")) {
                            //             this.storageHelper.setItem("selectedRole", "fddAdmin");
                            //             break;
                            //         }
                            //     }
                            // }
                            //this.ProcessRelayStateData();
                            // this.navigateToFigOrBuyerDashboard();
                            this._router.navigateByUrl('/actions');
                        }
                        else {
                            this._router.navigateByUrl('/unauthorized');
                        }
                    } else {
                        this._router.navigateByUrl('/unauthorized');
                    }
                },
                    err => {
                        this.loadingData = false;
                        this._router.navigateByUrl('/unauthorized');
                    })
            }
            else {
                //redirect To PING URL
                //window.location.href = 'https://fedauthtst.pg.com/idp/startSSO.ping?PartnerSpId=https%3A%2F%2Fsigfadev.pg.com%3A8312%2Flogin&targetResource=';
                //window.location.href = 'https://fedauthtst.pg.com/idp/startSSO.ping?PartnerSpId=https%3A%2F%2Fsgraqa.pg.com%3A8212%2Flogin';
            }
        }
        else {
            this.loggedInUserDetails = this.storageHelper.getItem('loggedInUserDetails');
            this._applicationHeaderService.editLoggedInUserDetails(this.loggedInUserDetails);
            //this.ProcessRelayStateData();
            this._router.navigateByUrl('/actions');
        }
    }

    async ngOnInit() {
        debugger;

        this._sidebarService.editSidebarShowValue(false);
        // if (await this.checkIfUserAuthenticated()) {
        if (await this.checkIfUserAuthenticated()) {
            debugger;
            // this.googleuser = this.authInstance.currentUser.get();
            console.log("Authentication return result");
            this.googleAuthenticatedUserDetails(this.authInstance.currentUser.get().getBasicProfile().getEmail());
        }
        else {
            await this.authenticate();
        }

    }


    navigateToFigOrBuyerDashboard() {
        this._router.navigateByUrl("/dashboard");

    }

}
