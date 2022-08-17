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
    IsentPocs,IsentPoc,IDirectTrustReferrers, IDirectTrustReferrer, IDirectTrustReferrerDelete, IIncomingMessages, IIncomingMessage, IWIPDTPatients, IWIPDTPatient, IProcessedDTPatients, IProcessedDTPatient,
    IDTProcessedMessage, IDTProcessedMessages
} from 'src/app/modules/emrpage/Interface/iadmin';
@Component({
  selector: 'app-dt-sent-poc',
  templateUrl: './dt-sent-poc.component.html',
  styleUrls: ['./dt-sent-poc.component.scss']
})
export class DtSentPocComponent implements OnInit {
    displayedColumns = ['From', 'To', 'Subject','Sent'];
    dtSentPocs: IsentPocs = { PageSize: 20, MaxPageSize: 30 };
   // dtprocessedPatient: IDTProcessedMessage = {};
    noRecordsMessage1: string = "";
    noRecordsMessage2: string = "";

    angularDataSource: MatTableDataSource<IsentPoc> = new MatTableDataSource(this.dtSentPocs.sentPocs);

    pageSizeOptions: number[] = [10, 20, 30];
    loadingData: boolean = false;
    loggedInUserDetails: IUserDetails = {};
    selection = new SelectionModel<IsentPoc>(false, []);

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
        this.getSentPocs();
        
    }
    getMessageDetail(row: any, action: any) {

        this.loadingData = true;
        this._navigate.navigate(['/referrer/incomingmessage/incomingmessagedetail/' + row.InComingMessageID + '/sentforapproval'], { state: { redirect: this._navigate.url } });
       
    }
    getSentPocs() {
        this.loadingData = true;
        this._referrerservice.getSentPOCList(this.loggedInUserDetails.LoginName).subscribe(
            res => {
                debugger;
                this.loadingData = false;
                this.dtSentPocs.sentPocs = <IsentPoc[]>res;
                //this.dtprocessedPatients.processeddtmessages = this.dtprocessedPatients.processeddtmessages.filter(x => x.MatchFound == false);

                this.dtSentPocs.TotalRecords = this.dtSentPocs.sentPocs.length || 0;
                this.dtSentPocs.TotalPages = Math.ceil(this.dtSentPocs.TotalRecords / this.dtSentPocs.PageSize);
                this.dtSentPocs.CurrentPage = 0;
                this.angularDataSource = new MatTableDataSource(this.dtSentPocs.sentPocs.slice(0, this.dtSentPocs.PageSize));
                this.selection = new SelectionModel<IsentPoc>(false, []);
                if (this.dtSentPocs.sentPocs.length <= 0) {
                    this.noRecordsMessage1 = "No records found.";
                }
                else {
                    this.noRecordsMessage1 = "";
                }

            },
            err => { });
    }

    getPaginationData(pageEvent: any) {
        if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.dtSentPocs.CurrentPage = pageEvent.pageIndex;
            this.dtSentPocs.PageSize = pageEvent.pageSize;
            this.angularDataSource.data = this.dtSentPocs.sentPocs.slice((this.dtSentPocs.CurrentPage * this.dtSentPocs.PageSize), (((this.dtSentPocs.CurrentPage + 1) * this.dtSentPocs.PageSize) + 1));
            this.angularDataSource.sort = this.sort;
        }
        else {
            this.angularDataSource.data = this.dtSentPocs.sentPocs.slice(0, pageEvent.pageSize);
            this.angularDataSource.sort = this.sort;
        }
    }

}
