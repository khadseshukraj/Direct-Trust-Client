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
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {
    IDirectTrustReferrers, IDirectTrustReferrer, IDirectTrustReferrerDelete, IIncomingMessages, IIncomingMessage, IWIPDTPatients, IWIPDTPatient,
    IDT_ClinicMappings, IDT_ClinicMapping, IDT_Clinics} from 'src/app/modules/emrpage/Interface/iadmin';
import { NgForm, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dt-clinic-user-mapping',
    templateUrl: './dt-clinic-user-mapping.component.html',
    styleUrls: ['./dt-clinic-user-mapping.component.scss']
})
export class DtClinicUserMappingComponent implements OnInit {

    displayedColumns = ['ClinicNo', 'ClinicName', 'EmailId', 'Actions'];
    displayedColumns1 = ['ClinicNo', 'ClinicName', 'EmailId'];

    dtclinicmappings: IDT_ClinicMappings = { PageSize: 20, MaxPageSize: 30 };
    dtclinicmapping: IDT_ClinicMapping = {};

    dtclinicmappingsFound: IDT_ClinicMappings = { PageSize: 20, MaxPageSize: 30 };
    dtclinicmappingFound: IDT_ClinicMapping = {};
    noRecordsMessage1: string = "";
    noRecordsMessage2: string = "";
    dtclinicmappingsselect: IDT_ClinicMapping = {};
    selectClinicName?: IDT_Clinics = {};
    angularDataSource: MatTableDataSource<IDT_ClinicMapping> = new MatTableDataSource(this.dtclinicmappings.clinicmappings);
    angularDataSourcefound: MatTableDataSource<IDT_ClinicMapping> = new MatTableDataSource(this.dtclinicmappingsFound.clinicmappings);
    pageSizeOptions: number[] = [10, 20, 30];
    loadingData: boolean = false;

    @ViewChild(MatPaginator, null) paginator: MatPaginator;
    @ViewChild(MatSort, null) sort: MatSort;
    @ViewChild("clinicForm", null) clinicForm: NgForm;

    myControl = new FormControl();
    options: IDT_Clinics[] = [
        { ClinicName: 'Mary', ClinicNo:'101' },
        { ClinicName: 'Mary1', ClinicNo: '102'},
        { ClinicName: 'Mary2', ClinicNo: '103'}
    ];
    filteredOptions: Observable<IDT_Clinics[]>;
    constructor(private _headerService: ApplicationHeaderService, private _storageHelper: StorageHelper, private _sidebarService: SidebarService, private modalDialog: MatDialog, private _referrerservice: ReferralService) {

    }

    ngOnInit() {

        this._sidebarService.setActiveState("clinicmappings");
        this._sidebarService.editSidebarShowValue(true);
        this.getClincs();
        this.getClincmappings();
    }
    displayFn(user: IDT_Clinics): string {
        return user && user.ClinicName ? user.ClinicName : '';
    }

    private _filter(name: string): IDT_Clinics[] {
        const filterValue = name.toLowerCase();

        return this.options.filter(option => option.ClinicName.toLowerCase().includes(filterValue));
    }
    clearControls() {
        this.dtclinicmappingsselect.ClinicName = "";
        this.dtclinicmappingsselect.ClinicNo = "";
        this.dtclinicmappingsselect.EmailId = "";
      
        this.selectClinicName = {};
    }
    SaveMapping() {
        if (!this.clinicForm.invalid && this.selectClinicName.ClinicName != undefined && this.selectClinicName.ClinicName != null && this.selectClinicName.ClinicName!='') {
            this.dtclinicmappingsselect.ClinicName = this.selectClinicName.ClinicName;
            this.dtclinicmappingsselect.ClinicNo = this.selectClinicName.ClinicNo;
            var mappingexist = this.dtclinicmappings.clinicmappings.filter(x => x.EmailId != "integration@test.direct.team-rehab.com");
            if (mappingexist != undefined && mappingexist != null && mappingexist.length>0) {


                var itemfound = mappingexist.filter(x => x.ClinicNo == this.dtclinicmappingsselect.ClinicNo);
                if (itemfound != undefined && itemfound != null && itemfound.length>0) {
                    ModalStaticClass.show(this.modalDialog, "", "Clinic Mapping",
                        "Do you want to Update the Mapping. Please confirm", 1, false, 1, "400px")
                        .subscribe(res => {
                            if (res) {
                                this._referrerservice.SaveClinicMapping(this.dtclinicmappingsselect).subscribe(
                                    response => {
                                        ModalStaticClass.show(this.modalDialog, "", "Success", "Details processed successfully.", 0, false, 1, "500px", 0);
                                        this.getClincmappings();
                                        this.clearControls();
                                    });
                            }
                        });

                }
                else {
                    this._referrerservice.SaveClinicMapping(this.dtclinicmappingsselect).subscribe(
                        response => {
                            ModalStaticClass.show(this.modalDialog, "", "Success", "Details processed successfully.", 0, false, 1, "500px", 0);
                            this.getClincmappings();
                            this.clearControls();
                        });
                }
               
            }
            else {
                this._referrerservice.SaveClinicMapping(this.dtclinicmappingsselect).subscribe(
                    response => {
                        ModalStaticClass.show(this.modalDialog, "", "Success", "Details processed successfully.", 0, false, 1, "500px", 0);
                        this.getClincmappings();
                        this.clearControls();
                    });
            }
        }
        
    }
    getClincs() {
        this.loadingData = true;
        this._referrerservice.getClinics().subscribe(
            res => {
                this.options = <IDT_Clinics[]>res;
                this.filteredOptions = this.myControl.valueChanges
                    .pipe(
                        startWith(''),
                        map(value => typeof value === 'string' ? value : value.name),
                        map(name => name ? this._filter(name) : this.options.slice())
                    );
            },
            err => { });

    }
    getClincmappings() {
        this.loadingData = true;
        this._referrerservice.getClinicMappings().subscribe(
            res => {
                this.dtclinicmappings.clinicmappings = <IDT_ClinicMapping[]>res;
                if (this.dtclinicmappings.clinicmappings != null && this.dtclinicmappings.clinicmappings.length > 0 && this.dtclinicmappings.clinicmappings != undefined) {
                    this.dtclinicmappings.clinicmappings = this.dtclinicmappings.clinicmappings.filter(x => x.MappingExist == false);
                }
               
                this.loadingData = false;
                this.dtclinicmappings.TotalRecords = this.dtclinicmappings.clinicmappings.length || 0;
                this.dtclinicmappings.TotalPages = Math.ceil(this.dtclinicmappings.TotalRecords / this.dtclinicmappings.PageSize);
                this.dtclinicmappings.CurrentPage = 0;
                this.angularDataSource = new MatTableDataSource(this.dtclinicmappings.clinicmappings.slice(0, this.dtclinicmappings.PageSize));
                if (this.dtclinicmappings.clinicmappings.length <= 0) {
                    this.noRecordsMessage2 = "No records found.";
                }
                else {
                    this.noRecordsMessage2 = "";
                }

                this.dtclinicmappingsFound.clinicmappings = <IDT_ClinicMapping[]>res;
                if (this.dtclinicmappingsFound.clinicmappings != null && this.dtclinicmappingsFound.clinicmappings.length > 0 && this.dtclinicmappingsFound.clinicmappings != undefined) {

                    this.dtclinicmappingsFound.clinicmappings = this.dtclinicmappingsFound.clinicmappings.filter(x => x.MappingExist == true);
                    }
                
                this.loadingData = false;
                this.dtclinicmappingsFound.TotalRecords = this.dtclinicmappingsFound.clinicmappings.length || 0;
                this.dtclinicmappingsFound.TotalPages = Math.ceil(this.dtclinicmappingsFound.TotalRecords / this.dtclinicmappingsFound.PageSize);
                this.dtclinicmappingsFound.CurrentPage = 0;
                this.angularDataSourcefound = new MatTableDataSource(this.dtclinicmappingsFound.clinicmappings.slice(0, this.dtclinicmappingsFound.PageSize));
                console.log(this.angularDataSourcefound.data.length);
                if (this.dtclinicmappingsFound.clinicmappings.length <= 0) {
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
            this.dtclinicmappings.CurrentPage = pageEvent.pageIndex;
            this.dtclinicmappings.PageSize = pageEvent.pageSize;
            this.angularDataSource.data = this.dtclinicmappings.clinicmappings.slice((this.dtclinicmappings.CurrentPage * this.dtclinicmappings.PageSize), (((this.dtclinicmappings.CurrentPage + 1) * this.dtclinicmappings.PageSize) + 1));
            this.angularDataSource.sort = this.sort;
        }
        else {
            this.angularDataSource.data = this.dtclinicmappings.clinicmappings.slice(0, pageEvent.pageSize);
            this.angularDataSource.sort = this.sort;
        }
    }
    getPaginationfoundData(pageEvent: any) {
        if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.dtclinicmappingsFound.CurrentPage = pageEvent.pageIndex;
            this.dtclinicmappingsFound.PageSize = pageEvent.pageSize;
            this.angularDataSourcefound.data = this.dtclinicmappingsFound.clinicmappings.slice((this.dtclinicmappingsFound.CurrentPage * this.dtclinicmappingsFound.PageSize), (((this.dtclinicmappingsFound.CurrentPage + 1) * this.dtclinicmappingsFound.PageSize) + 1));
            this.angularDataSourcefound.sort = this.sort;
        }
        else {
            this.angularDataSourcefound.data = this.dtclinicmappingsFound.clinicmappings.slice(0, pageEvent.pageSize);
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
                          //  this.getInProgressPatients();
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
                           // this.getInProgressPatients();
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
                           // this.getInProgressPatients();
                        }
                    )
                }
            });
    }
    ngAfterViewInit() {

    }
    RemoveMapping(clinicno: any) {
        ModalStaticClass.show(this.modalDialog, "", "Remove Mapping",
            "Do you want to remove mapping. Please confirm", 1, false, 1, "400px")
            .subscribe(res => {
                if (res) {

                    this._referrerservice.RemoveMapping(clinicno).subscribe(
                        response => {
                            this.loadingData = false;

                            ModalStaticClass.show(this.modalDialog, "", "Success", "Mapping removed successfully.", 0, false, 1, "500px", 0);
                            this.getClincmappings();
                        },
                        err => {
                            ModalStaticClass.show(this.modalDialog, "", "Error", "something went wrong", 0, false, 1, "500px", 1);
                        });
                }
            });

    }
    EditMapping(clinicno: any) {

        var clinicdetails = this.dtclinicmappingsFound.clinicmappings.filter(x => x.ClinicNo == clinicno);
        if (clinicdetails != undefined && clinicdetails != null && clinicdetails.length>0) {
            this.selectClinicName.ClinicName = clinicdetails[0].ClinicName;
            this.selectClinicName.ClinicNo = clinicdetails[0].ClinicNo;
            this.dtclinicmappingsselect.EmailId = clinicdetails[0].EmailId;
            //this.dtclinicmappingsselect.ClinicUserPassword = clinicdetails[0].ClinicUserPassword;
            this.myControl.setValue({ ClinicName: this.selectClinicName.ClinicName, ClinicNo: this.selectClinicName.ClinicNo });
        }
      
    }

}

