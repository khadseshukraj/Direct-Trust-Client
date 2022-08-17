import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { timeout } from 'q';
import { ApplicationHeaderService } from '../../../layout/services/application-header.service';
import { SidebarService } from '../../../layout/services/sidebar.service';
declare var jquery: any;
declare var $: any

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LogoutComponent implements OnInit {

    constructor(private _cookieService: CookieService, private _router: ActivatedRoute, private _headerService: ApplicationHeaderService,
        private _sidebarService: SidebarService, private _route: Router) { }

    autoLogout: any;
    gapiSetup: any;
    authInstance: any;
    googlerror: any;

    ngOnInit() {
        this.autoLogout = this._router.snapshot.paramMap.get('autoLogout');

       
        sessionStorage.removeItem("loggedInUserDetails");
        sessionStorage.removeItem("basicFilterDetails");
        sessionStorage.removeItem("selectedRole");
        sessionStorage.removeItem("filterMapData");
        sessionStorage.removeItem("contractFlterDropdowns");
        sessionStorage.removeItem("contractFlterDetails");
        sessionStorage.removeItem("advancedFilterDropdowns");
        sessionStorage.removeItem("selectedModule");
        sessionStorage.removeItem("allocationFlterDetails");
        sessionStorage.removeItem("dashboardData");
        sessionStorage.removeItem("fddSummaryData");
        sessionStorage.removeItem("fddFilterParams");
        sessionStorage.removeItem("fddFilterDropdowns");
        sessionStorage.removeItem("nssRnO");
        sessionStorage.removeItem("totalPPVForecast");
        sessionStorage.removeItem("totalImpact");
        sessionStorage.removeItem("commodities");
        sessionStorage.removeItem("nssCommitted");
        sessionStorage.removeItem("supportTeam");
        sessionStorage.removeItem("currentState");
        this._headerService.editLoggedInUserDetails(null);
        this._sidebarService.editSidebarShowValue(false);
        this._cookieService.deleteAll();
        this.signOut();
    }

    navigateToLogin() {
        this._route.navigateByUrl("login");
        this._sidebarService.editSidebarShowValue(false);
    }
    async signOut() {
        debugger;
        if (!this.gapiSetup) {
            await this.initGoogleAuth();
        }

        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
        });
        auth2.disconnect();
  
        //var auth2 = gapi.auth2.getAuthInstance();
        //auth2.disconnect();
        //auth2.signOut().then(function () {
        //    console.log('User signed out.');
        //    auth2.disconnect();
        //    auth2 = null;
        //});

        //return new Promise(async () => {
        //    await this.authInstance.signOut().then(
        //        user => {
        //            console.log('User signed out.');
        //        },
        //        error => this.googlerror = error);
        //});
    }
    async initGoogleAuth(): Promise<void> {
        //  Create a new Promise where the resolve 
        // function is the callback passed to gapi.load
        const pload = new Promise((resolve) => {
            gapi.load('auth2', resolve);
        });

        // When the first promise resolves, it means we have gapi
        // loaded and that we can call gapi.init
        return pload.then(async () => {
            await gapi.auth2
                .init({
                    client_id: '480789291030-d1lrj1ir2v3gb28d417tl77ge0bk2o7p.apps.googleusercontent.com',
                    ux_mode: 'redirect'
                })
                .then(auth => {
                    this.gapiSetup = true;
                    this.authInstance = auth;
                    this.authInstance.disconnect();
                });
        });
    }
}
