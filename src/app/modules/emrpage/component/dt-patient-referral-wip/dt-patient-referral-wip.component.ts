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
import { IDirectTrustReferrers, IDirectTrustReferrer, IDirectTrustReferrerDelete, IIncomingMessages, IIncomingMessage, IWIPDTPatients, IWIPDTPatient } from 'src/app/modules/emrpage/Interface/iadmin';
import { NgForm, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dt-patient-referral-wip',
  templateUrl: './dt-patient-referral-wip.component.html',
  styleUrls: ['./dt-patient-referral-wip.component.scss']
})
export class DtPatientReferralWIPComponent implements OnInit {

    displayedColumns = ['FirstName', 'LastName', 'City', 'State', 'DOB', 'ReceptionistComments','Actions'];
    displayedColumns1 = ['FirstName', 'LastName', 'City', 'State', 'DOB', 'ReceptionistComments', 'Actions'];

    dtwipPatients: IWIPDTPatients = { PageSize: 20, MaxPageSize: 30 };
    dtwipPatient: IWIPDTPatient = {};

    dtwipPatientsFound: IWIPDTPatients = { PageSize: 20, MaxPageSize: 30 };
    dtwipPatientFound: IWIPDTPatient = {};
    noRecordsMessage1: string = "";
    noRecordsMessage2: string = "";

    angularDataSource: MatTableDataSource<IWIPDTPatient> = new MatTableDataSource(this.dtwipPatients.wipdtmessages);
    angularDataSourcefound: MatTableDataSource<IWIPDTPatient> = new MatTableDataSource(this.dtwipPatientsFound.wipdtmessages);
    pageSizeOptions: number[] = [10, 20, 30];
    loadingData: boolean = false;

    @ViewChild(MatPaginator, null) paginator: MatPaginator;
    @ViewChild(MatSort, null) sort: MatSort;


    constructor(private _headerService: ApplicationHeaderService, private _storageHelper: StorageHelper, private _sidebarService: SidebarService, private modalDialog: MatDialog, private _referrerservice: ReferralService) {

    }

    ngOnInit() {

        this._sidebarService.setActiveState("wipmessages");
        this._sidebarService.editSidebarShowValue(true);
        this.getInProgressPatients();
    }
    getInProgressPatients() {
        this.loadingData = true;
        this._referrerservice.getInProgressPatients().subscribe(
            res => {
                this.dtwipPatients.wipdtmessages = <IWIPDTPatient[]>res;
                this.dtwipPatients.wipdtmessages = this.dtwipPatients.wipdtmessages.filter(x => x.MatchFound == false);
                this.loadingData = false;
                this.dtwipPatients.TotalRecords = this.dtwipPatients.wipdtmessages.length || 0;
                this.dtwipPatients.TotalPages = Math.ceil(this.dtwipPatients.TotalRecords / this.dtwipPatients.PageSize);
                this.dtwipPatients.CurrentPage = 0;
                this.angularDataSource = new MatTableDataSource(this.dtwipPatients.wipdtmessages.slice(0, this.dtwipPatients.PageSize));
                if (this.dtwipPatients.wipdtmessages.length <= 0) {
                    this.noRecordsMessage1 = "No records found.";
                }
                else {
                    this.noRecordsMessage1 = "";
                }

                this.dtwipPatientsFound.wipdtmessages = <IWIPDTPatient[]>res;
                this.dtwipPatientsFound.wipdtmessages = this.dtwipPatientsFound.wipdtmessages.filter(x => x.MatchFound == true);
                this.loadingData = false;
                this.dtwipPatientsFound.TotalRecords = this.dtwipPatientsFound.wipdtmessages.length || 0;
                this.dtwipPatientsFound.TotalPages = Math.ceil(this.dtwipPatientsFound.TotalRecords / this.dtwipPatientsFound.PageSize);
                this.dtwipPatientsFound.CurrentPage = 0;
                this.angularDataSourcefound = new MatTableDataSource(this.dtwipPatientsFound.wipdtmessages.filter(x => x.MatchFound == true).slice(0, this.dtwipPatients.PageSize));
                console.log(this.angularDataSourcefound.data.length);
                if (this.dtwipPatientsFound.wipdtmessages.length <= 0) {
                    this.noRecordsMessage2 = "No records found.";
                }
                else {
                    this.noRecordsMessage2 = "";
                }
            },
            err => { });

    }
    //Paginator
    getPaginationData(pageEvent: any) {
        if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.dtwipPatients.CurrentPage = pageEvent.pageIndex;
            this.dtwipPatients.PageSize = pageEvent.pageSize;
            this.angularDataSource.data = this.dtwipPatients.wipdtmessages.slice((this.dtwipPatients.CurrentPage * this.dtwipPatients.PageSize), (((this.dtwipPatients.CurrentPage + 1) * this.dtwipPatients.PageSize) + 1));
            this.angularDataSource.sort = this.sort;
        }
        else {
            this.angularDataSource.data = this.dtwipPatients.wipdtmessages.slice(0, pageEvent.pageSize);
            this.angularDataSource.sort = this.sort;
        }
    }
    getPaginationfoundData(pageEvent: any) {
        if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.dtwipPatientsFound.CurrentPage = pageEvent.pageIndex;
            this.dtwipPatientsFound.PageSize = pageEvent.pageSize;
            this.angularDataSourcefound.data = this.dtwipPatientsFound.wipdtmessages.slice((this.dtwipPatientsFound.CurrentPage * this.dtwipPatientsFound.PageSize), (((this.dtwipPatientsFound.CurrentPage + 1) * this.dtwipPatientsFound.PageSize) + 1));
            this.angularDataSourcefound.sort = this.sort;
        }
        else {
            this.angularDataSourcefound.data = this.dtwipPatientsFound.wipdtmessages.slice(0, pageEvent.pageSize);
            this.angularDataSourcefound.sort = this.sort;
        }
    }
    CreatePatient(patientid: any) {


        ModalStaticClass.show(this.modalDialog, "", "Create Patient",
            "This action will Create Patient. Please confirm", 1, false, 1, "400px")
            .subscribe(res => {
                if (res) {
                    this.loadingData = true;
                    this._referrerservice.CreatePatient(patientid).subscribe(
                        response => {
                            this.loadingData = false;

                            ModalStaticClass.show(this.modalDialog, "", "Success", "Details Created successfully.", 0, false, 1, "500px", 0);
                            this.getInProgressPatients();
                        }
                    )
                }
            });
    }
    RejectPatient(patientid: any) {


        ModalStaticClass.show(this.modalDialog, "", "Reject Patient",
            "This action will Reject Patient. Please confirm", 1, false, 1, "400px")
            .subscribe(res => {
                if (res) {
                    this.loadingData = true;
                    this._referrerservice.RejectPatient(patientid).subscribe(
                        response => {
                            this.loadingData = false;

                            ModalStaticClass.show(this.modalDialog, "", "Success", "Details Rejected successfully.", 0, false, 1, "500px", 0);
                            this.getInProgressPatients();
                        }
                    )
                }
            });
    }
    ImportPatient(patientid: any) {


        ModalStaticClass.show(this.modalDialog, "", "Import Patient",
            "This action will Import Patient. Please confirm", 1, false, 1, "400px")
            .subscribe(res => {
                if (res) {
                    this.loadingData = true;
                    this._referrerservice.ImportPatient(patientid).subscribe(
                        response => {
                            this.loadingData = false;

                            ModalStaticClass.show(this.modalDialog, "", "Success", "Details Imported successfully.", 0, false, 1, "500px", 0);
                            this.getInProgressPatients();
                        }
                    )
                }
            });
    }
    ngAfterViewInit() {

    }

}

