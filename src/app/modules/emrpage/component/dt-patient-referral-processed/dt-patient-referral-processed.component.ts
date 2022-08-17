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
import { IUserDetails } from 'src/app/modules/shared/interfaces/icommon';
import {
    IDirectTrustReferrers, IDirectTrustReferrer, IDirectTrustReferrerDelete, IIncomingMessages, IIncomingMessage, IWIPDTPatients, IWIPDTPatient, IProcessedDTPatients, IProcessedDTPatient,
    IDTProcessedMessage, IDTProcessedMessages} from 'src/app/modules/emrpage/Interface/iadmin';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-dt-patient-referral-processed',
  templateUrl: './dt-patient-referral-processed.component.html',
  styleUrls: ['./dt-patient-referral-processed.component.scss']
})
export class DtPatientReferralProcessedComponent implements OnInit {
    displayedColumns = ['From', 'To', 'Received', 'Subject', 'Status', 'Processed','Action'];
    displayedColumns1 = ['FirstName', 'LastName', 'City', 'State', 'DOB', 'ReceptionistComments'];

    dtprocessedPatients: IDTProcessedMessages = { PageSize: 20, MaxPageSize: 30 };
    dtprocessedPatient: IDTProcessedMessage = {};

    selection = new SelectionModel<IDTProcessedMessage>(false, []);
    noRecordsMessage1: string = "";
    noRecordsMessage2: string = "";

    angularDataSource: MatTableDataSource<IDTProcessedMessage> = new MatTableDataSource(this.dtprocessedPatients.processeddtmessages);
    
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
        this.getProcessedPatients();
       
    }
    unprocessReferral(ID:any) {
        this.loadingData = true;
        this._referrerservice.unprocessReferral(ID).subscribe(
            res => {
                this.loadingData = false;
               
                if (res==true) {
                   // this.noRecordsMessage1 = "Message moved to Inbox Succcessfully";
                    ModalStaticClass.show(this.modalDialog, "", "Success", "Message moved to Inbox Succcessfully.", 0, false, 1, "500px", 0);
                    this.getProcessedPatients();
                }
                else {
                    ModalStaticClass.show(this.modalDialog, "", "Error", "Failed to move Message to Inbox.", 0, false, 1, "500px", 1);
                    //this.noRecordsMessage1 = "Failed to move Message to Inbox";
                }

            },
            err => { });

    }
    getProcessedPatients() {
        this.loadingData = true;
        this._referrerservice.getDTProcessedtMessageList(this.loggedInUserDetails.LoginName).subscribe(
            res => {
                this.loadingData = false;
                this.dtprocessedPatients.processeddtmessages = <IDTProcessedMessage[]>res;
                //this.dtprocessedPatients.processeddtmessages = this.dtprocessedPatients.processeddtmessages.filter(x => x.MatchFound == false);
               
                this.dtprocessedPatients.TotalRecords = this.dtprocessedPatients.processeddtmessages.length || 0;
                this.dtprocessedPatients.TotalPages = Math.ceil(this.dtprocessedPatients.TotalRecords / this.dtprocessedPatients.PageSize);
                this.dtprocessedPatients.CurrentPage = 0;
                this.angularDataSource = new MatTableDataSource(this.dtprocessedPatients.processeddtmessages.slice(0, this.dtprocessedPatients.PageSize));
                this.selection = new SelectionModel<IDTProcessedMessage>(false, []);
                if (this.dtprocessedPatients.processeddtmessages.length <= 0) {
                    this.noRecordsMessage1 = "No records found.";
                }
                else {
                    this.noRecordsMessage1 = "";
                }

            },
            err => { });

    }
    //Paginator
    getPaginationData(pageEvent: any) {
        if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.dtprocessedPatients.CurrentPage = pageEvent.pageIndex;
            this.dtprocessedPatients.PageSize = pageEvent.pageSize;
            this.angularDataSource.data = this.dtprocessedPatients.processeddtmessages.slice((this.dtprocessedPatients.CurrentPage * this.dtprocessedPatients.PageSize), (((this.dtprocessedPatients.CurrentPage + 1) * this.dtprocessedPatients.PageSize) + 1));
            this.angularDataSource.sort = this.sort;
        }
        else {
            this.angularDataSource.data = this.dtprocessedPatients.processeddtmessages.slice(0, pageEvent.pageSize);
            this.angularDataSource.sort = this.sort;
        }
    }
    getMessageDetail(row: any, action: any) {

        this.loadingData = true;
        this._navigate.navigate(['/referrer/incomingmessage/incomingmessagedetail/' + row.ID + '/referralprocessed'], { state: { redirect: this._navigate.url } });
        //this._referrerservice.getIncomingMessageOperation(row.ID,'referralprocessed').subscribe(
        //    res => {
        //        this.loadingData = false;
                

        //        if (this.loggedInUserDetails.Roles.toLocaleLowerCase() == 'front desk' && action == 'edit') {
        //            this._navigate.navigate(['/referrer/incomingmessage/incomingmessagedetail/' + row.ID + '/edit'], { state: { redirect: this._navigate.url } });
        //        }
        //        else if (this.loggedInUserDetails.Roles.toLocaleLowerCase() == 'front desk' && action == 'referralprocessed') {
        //            this._navigate.navigate(['/referrer/incomingmessage/incomingmessagedetail/' + row.ID + '/referralprocessed'], { state: { redirect: this._navigate.url } });
        //        }

        //    },
        //    err => { });

        
    }
    ngAfterViewInit() {

    }

}

