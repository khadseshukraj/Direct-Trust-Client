import { Component, OnInit, ViewChild, Inject, ViewEncapsulation } from '@angular/core';
import { ApplicationHeaderService } from 'src/app/layout/services/application-header.service';
import { StorageHelper } from 'src/app/core/services/storage-helper.service';
import { SidebarService } from 'src/app/layout/services/sidebar.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ModalStaticClass } from '../../../shared/components/modal/ModalStaticClass';
import { SharedService } from 'src/app/modules/shared/services/shared.service';
import { MatPaginator } from '@angular/material';
import { ReferralService } from 'src/app/modules/emrpage/services/referral.service';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { IUserDetails } from 'src/app/modules/shared/interfaces/icommon';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import {
    IDTProcessedPOCSList,IsentPocs, IsentPoc, IDirectTrustReferrers, IDirectTrustReferrer, IDirectTrustReferrerDelete, IIncomingMessages, IIncomingMessage, IWIPDTPatients, IWIPDTPatient, IProcessedDTPatients, IProcessedDTPatient,
    IDTProcessedMessage, IDTProcessedMessages
} from 'src/app/modules/emrpage/Interface/iadmin';
@Component({
  selector: 'app-dt-plan-care-processed',
  templateUrl: './dt-plan-care-processed.component.html',
  styleUrls: ['./dt-plan-care-processed.component.scss']
})
export class DtPlanCareProcessedComponent implements OnInit {
    displayedColumns = ['From', 'To', 'Received','Subject','Status','Processed'];
    displayedColumns1 = ['FirstName', 'LastName', 'City', 'State', 'DOB', 'ReceptionistComments'];



    dtprocessedPocs: IDTProcessedMessages = { PageSize: 20, MaxPageSize: 30 };
    dtprocessedPoc: IDTProcessedMessage = {};
    processedPOCsList: IDTProcessedPOCSList = {};
    dtdeclinedPocs: IDTProcessedMessages = { PageSize: 20, MaxPageSize: 30 };
    dtdeclinedPoc: IDTProcessedMessage = {};
    selection = new SelectionModel<IDTProcessedMessage>(false, []);
    declinedselection = new SelectionModel<IDTProcessedMessage>(false, []);

    noRecordsMessage1: string = "";
    noRecordsMessage2: string = "";

    angularDataSourceProcessed: MatTableDataSource<IDTProcessedMessage> = new MatTableDataSource(this.dtprocessedPocs.processeddtmessages);
    angularDataSourceDeclined: MatTableDataSource<IDTProcessedMessage> = new MatTableDataSource(this.dtdeclinedPocs.processeddtmessages);

    pageSizeOptions: number[] = [10, 20, 30];
    loadingData: boolean = false;
    loggedInUserDetails: IUserDetails = {};
    @ViewChild(MatPaginator, null) paginator: MatPaginator;
    @ViewChild(MatSort, null) sort: MatSort;


    constructor(private _headerService: ApplicationHeaderService, private _storageHelper: StorageHelper, private _navigate: Router,
        private _sidebarService: SidebarService, private modalDialog: MatDialog, private _referrerservice: ReferralService) {

    }


    ngOnInit() {
        this._sidebarService.setActiveState("processedmessages");
        this._sidebarService.editSidebarShowValue(true);
        if (this._storageHelper.getItem("loggedInUserDetails") != null) {
            this.loggedInUserDetails = this._storageHelper.getItem("loggedInUserDetails");
        }
        this.getPOCS();
    }
    getMessageDetail(row: any, action: any) {

        this.loadingData = true;
        this._navigate.navigate(['/referrer/incomingmessage/incomingmessagedetail/' + row.IncomingMessageID + '/' + action], { state: { redirect: this._navigate.url } });
      
    }
    getPOCS() {
        this.loadingData = true;
        debugger;
        this._referrerservice.getPocs(this.loggedInUserDetails.LoginName).subscribe(
            res => {
                
                this.processedPOCsList = <IDTProcessedPOCSList>res;
                this.dtprocessedPocs.processeddtmessages = this.processedPOCsList.pocProcessed;
                this.loadingData = false;
               if (this.dtprocessedPocs.processeddtmessages != null && this.dtprocessedPocs.processeddtmessages.length > 0 && this.dtprocessedPocs.processeddtmessages != undefined) {
                    // this.dtprocessedPocs.processeddtmessages = this.dtprocessedPocs.processeddtmessages.filter(x => x.EmailId == "integration@test.direct.team-rehab.com");

                    //this.loadingData = false;
                    this.dtprocessedPocs.TotalRecords = this.dtprocessedPocs.processeddtmessages.length || 0;
                    this.dtprocessedPocs.TotalPages = Math.ceil(this.dtprocessedPocs.TotalRecords / this.dtprocessedPocs.PageSize);
                    this.dtprocessedPocs.CurrentPage = 0;
                   this.angularDataSourceProcessed = new MatTableDataSource(this.dtprocessedPocs.processeddtmessages.slice(0, this.dtprocessedPocs.PageSize));
                   this.selection = new SelectionModel<IDTProcessedMessage>(false, []);
                    if (this.dtprocessedPocs.processeddtmessages.length <= 0) {
                        this.noRecordsMessage2 = "No records found.";
                    }
                    else {
                        this.noRecordsMessage2 = "";
                    }
                }
                else {
                    this.noRecordsMessage2 = "No records found.";
                }

                
                
                this.dtdeclinedPocs.processeddtmessages = this.processedPOCsList.pocDeclined;
               
                if (this.dtdeclinedPocs.processeddtmessages != null && this.dtdeclinedPocs.processeddtmessages.length > 0 && this.dtdeclinedPocs.processeddtmessages != undefined) {


                   // this.loadingData = false;
                    this.dtdeclinedPocs.TotalRecords = this.dtdeclinedPocs.processeddtmessages.length || 0;
                    this.dtdeclinedPocs.TotalPages = Math.ceil(this.dtdeclinedPocs.TotalRecords / this.dtdeclinedPocs.PageSize);
                    this.dtdeclinedPocs.CurrentPage = 0;
                    this.angularDataSourceDeclined = new MatTableDataSource(this.dtdeclinedPocs.processeddtmessages.slice(0, this.dtprocessedPocs.PageSize));
                    this.declinedselection = new SelectionModel<IDTProcessedMessage>(false, []);
                    //console.log(this.angularDataSourcefound.data.length);
                    if (this.dtdeclinedPocs.processeddtmessages.length <= 0) {
                        this.noRecordsMessage1 = "No records found.";
                    }
                    else {
                        this.noRecordsMessage1 = "";
                    }
                }
                else { this.noRecordsMessage1 = "No records found.";}
            },
            err => { });
    }

    getPaginationDataProcessed(pageEvent: any) {
        if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.dtprocessedPocs.CurrentPage = pageEvent.pageIndex;
            this.dtprocessedPocs.PageSize = pageEvent.pageSize;
            this.angularDataSourceProcessed.data = this.dtprocessedPocs.processeddtmessages.slice((this.dtprocessedPocs.CurrentPage * this.dtprocessedPocs.PageSize), (((this.dtprocessedPocs.CurrentPage + 1) * this.dtprocessedPocs.PageSize) + 1));
            this.angularDataSourceProcessed.sort = this.sort;
        }
        else {
            this.angularDataSourceProcessed.data = this.dtprocessedPocs.processeddtmessages.slice(0, pageEvent.pageSize);
            this.angularDataSourceProcessed.sort = this.sort;
        }
    }
    getPaginationDataDeclined(pageEvent: any) {
        if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.dtdeclinedPocs.CurrentPage = pageEvent.pageIndex;
            this.dtdeclinedPocs.PageSize = pageEvent.pageSize;
            this.angularDataSourceDeclined.data = this.dtdeclinedPocs.processeddtmessages.slice((this.dtdeclinedPocs.CurrentPage * this.dtdeclinedPocs.PageSize), (((this.dtdeclinedPocs.CurrentPage + 1) * this.dtdeclinedPocs.PageSize) + 1));
            this.angularDataSourceDeclined.sort = this.sort;
        }
        else {
            this.angularDataSourceDeclined.data = this.dtdeclinedPocs.processeddtmessages.slice(0, pageEvent.pageSize);
            this.angularDataSourceDeclined.sort = this.sort;
        }
    }
}
