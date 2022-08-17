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
import { IDirectTrustReferrers, IDirectTrustReferrer, IDirectTrustReferrerDelete, IDTPOCNotFoundMessages, IDTPOCNotFoundMessage } from 'src/app/modules/emrpage/Interface/iadmin';
import { NgForm, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dtpoc-not-found',
  templateUrl: './dtpoc-not-found.component.html',
  styleUrls: ['./dtpoc-not-found.component.scss']
})
export class DTPocNotFoundComponent implements OnInit {
    displayedColumns = ['Institute_ID', 'Note_ID', 'Patient_ID', 'POC_Status'];
    DTPOCNotFoundMessages: IDTPOCNotFoundMessages = { PageSize: 20, MaxPageSize: 30 };
    DTPOCNotFoundMessage: IDTPOCNotFoundMessage = {};
    noRecordsMessage: string = "";

    angularDataSource: MatTableDataSource<IDTPOCNotFoundMessage> = new MatTableDataSource(this.DTPOCNotFoundMessages.IdtpocnotfoundMessages);
    pageSizeOptions: number[] = [10, 20, 30];
    loadingData: boolean = false;

    @ViewChild(MatPaginator, null) paginator: MatPaginator;
    @ViewChild(MatSort, null) sort: MatSort;


    constructor(private _headerService: ApplicationHeaderService, private _storageHelper: StorageHelper, private _sidebarService: SidebarService, private modalDialog: MatDialog, private _referrerservice: ReferralService) {

    }

    ngOnInit() {

        this._sidebarService.setActiveState("dtpocnotfoundmessage");
        this._sidebarService.editSidebarShowValue(true);
        this.getDTPOCNotFoundMessageList();
    }
    getDTPOCNotFoundMessageList() {
        this.loadingData = true;
        this._referrerservice.getDTPOCNotFoundMessageList().subscribe(
            res => {
                this.DTPOCNotFoundMessages.IdtpocnotfoundMessages = <IDTPOCNotFoundMessage[]>res;
                this.loadingData = false;
                this.DTPOCNotFoundMessages.TotalRecords = this.DTPOCNotFoundMessages.IdtpocnotfoundMessages.length || 0;
                this.DTPOCNotFoundMessages.TotalPages = Math.ceil(this.DTPOCNotFoundMessages.TotalRecords / this.DTPOCNotFoundMessages.PageSize);
                this.DTPOCNotFoundMessages.CurrentPage = 0;
                this.angularDataSource = new MatTableDataSource(this.DTPOCNotFoundMessages.IdtpocnotfoundMessages.slice(0, this.DTPOCNotFoundMessages.PageSize));
                if (this.DTPOCNotFoundMessages.IdtpocnotfoundMessages.length <= 0) {
                    this.noRecordsMessage = "No records found.";
                }
                else {
                    this.noRecordsMessage = "";
                }
            },
            err => { });

    }
    //Paginator
    getPaginationData(pageEvent: any) {
        if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.DTPOCNotFoundMessages.CurrentPage = pageEvent.pageIndex;
            this.DTPOCNotFoundMessages.PageSize = pageEvent.pageSize;
            this.angularDataSource.data = this.DTPOCNotFoundMessages.IdtpocnotfoundMessages.slice((this.DTPOCNotFoundMessages.CurrentPage * this.DTPOCNotFoundMessages.PageSize), (((this.DTPOCNotFoundMessages.CurrentPage + 1) * this.DTPOCNotFoundMessages.PageSize) + 1));
            this.angularDataSource.sort = this.sort;
        }
        else {
            this.angularDataSource.data = this.DTPOCNotFoundMessages.IdtpocnotfoundMessages.slice(0, pageEvent.pageSize);
            this.angularDataSource.sort = this.sort;
        }
    }
    ngAfterViewInit() {

    }

}
