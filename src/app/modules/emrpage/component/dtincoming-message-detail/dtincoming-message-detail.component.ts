import {
    Component, OnInit, ViewChild, Inject, ViewEncapsulation, Output, EventEmitter,
    AfterViewChecked, AfterViewInit } from '@angular/core';
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

import { Router, CanLoad, UrlSegment, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, NavigationEnd, RoutesRecognized } from '@angular/router';
import {
    IDirectTrustReferrers, IDirectTrustReferrer, IDirectTrustReferrerDelete, IDTPOCNotFoundMessages, IDTPOCNotFoundMessage, IIncomingMessageDetail,
    IIncomingMessageXML, IIncomingMessageXMLcollection, IIncomingMessageProcessed, IactionsforXML,
    IIncomingMessageOperation, IIncomingMessagePOC,
    IIncomingMessagePatient, IIncomingMessagePOCPage, IIncomingMessagePatientPage, IAcceptPatient, IRejectPatient, IIncomingMessageXMLContent,
    IReferrer, IReferrerList, IResponseEntity
} from 'src/app/modules/emrpage/Interface/iadmin';

import { ActivatedRoute } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { IUserDetails } from 'src/app/modules/shared/interfaces/icommon';
import { WizardComponent } from 'angular-archwizard';
import { error } from '@angular/compiler/src/util';
import { DatePipe } from '@angular/common';
import { saveAs } from 'file-saver'
import { FormGroup, FormBuilder, Validators, FormArray, ValidatorFn, AbstractControl, NgForm, FormControl } from '@angular/forms';
import * as vkbeautify from 'vkbeautify';
import { filter, pairwise } from 'rxjs/operators';
import 'rxjs/add/operator/pairwise';

@Component({
    selector: 'app-dtincoming-message-detail',
    templateUrl: './dtincoming-message-detail.component.html',
    styleUrls: ['./dtincoming-message-detail.component.scss']
})
export class DTIncomingMessageDetailComponent implements OnInit   {
    displayedColumns = ['FileName', 'FileData'];
    DTIncomingXML: IIncomingMessageXMLcollection = { PageSize: 5, MaxPageSize: 30 };
    DTincomingmessagedetail: IIncomingMessageDetail = {};
    DTincomingmessagedetailprocessed: IIncomingMessageProcessed = {};
    noRecordsMessage: string = "";
    nopatientRecordsMessage: string = "";
    nopocRecordsMessage: string = "";

    DTPatients: IIncomingMessagePatientPage= { PageSize: 5, MaxPageSize: 30 };
    DTincomingmessageResponse: IIncomingMessageOperation = {};

    DTPOCs: IIncomingMessagePOCPage = { PageSize: 5, MaxPageSize: 30 };
   

    angularDataSource: MatTableDataSource<IIncomingMessageXML> = new MatTableDataSource(this.DTIncomingXML.XMLattachment);
    patientDataSource: MatTableDataSource<IIncomingMessagePatient> = new MatTableDataSource(this.DTPatients.IncomingMessagePatients);
    pocDataSource: MatTableDataSource<IIncomingMessagePOC> = new MatTableDataSource(this.DTPOCs.IncomingMessagePOCs);

    selection = new SelectionModel<IIncomingMessageXML>(false, []);
    loggedInUserDetails: IUserDetails = {};

    referrerdisplayedColumns = ['Name', 'Email', 'Action'];
    referrerlist: IReferrerList = { PageSize: 5, MaxPageSize: 7 };
    referrerDataSource: MatTableDataSource<IReferrer> = new MatTableDataSource(this.referrerlist.rehabReferrers);
    noreferrerRecordsMessage: string = "";
    responsereferrerlist: IReferrer[] = [];

    pageSizeOptions: number[] = [5,10, 20, 30];
    loadingData: boolean = false;
    InComingMessageId: number;
    requestedAction: string;
    xmlfile: IIncomingMessageXML;
    selectedfile: string;

    xmlSelected: boolean = false;
    xmlFileContent: IIncomingMessageXML = {};
    actionxml: IactionsforXML[] = [
        { value: 'Referral', viewValue: 'Referral' },
        { value: 'Plan of care approved', viewValue: 'Plan of care approved' }
        //{ value: 'Plan of care declined', viewValue: 'Plan of care declined' }
    ];
    acceptpatient: IAcceptPatient = {};
    rejectpatient: IRejectPatient = {};

    @ViewChild(MatPaginator, null) paginator: MatPaginator;
    @ViewChild(MatSort, null) sort: MatSort;

    @ViewChild(WizardComponent,null)
    wizard?: WizardComponent;

    patientdisplayedColumns = ['Option','Name', 'BirthDate', 'CellPh', 'Address','MRN','Action'];
    pocdisplayedColumns = ['Option', 'ApprovalSent','TherapistName','PDFName'];
   // DTPatients: IIncomingMessagePatientPage = { PageSize: 20, MaxPageSize: 30 };
   // DTincomingmessageResponse: IIncomingMessageOperation = {};
   // patientDataSource: MatTableDataSource<IIncomingMessagePatient> = new MatTableDataSource(this.DTPatients.IncomingMessagePatients);
    patientselection = new SelectionModel<IIncomingMessagePatient>(false, []);
    pocselection = new SelectionModel<IIncomingMessagePOC>(false, []);
    //pageSizeOptions: number[] = [10, 20, 30];
   // nopatientRecordsMessage: string = "";
    patientitemSelected: boolean = false;
    pocitemSelected: boolean = false;
    DTPatient: IIncomingMessagePatient = {};
    DTPOC: IIncomingMessagePOC = {};
    IsRefererrPatientExist: boolean = false;
    IsRefererralstep2: boolean = false;
    selectedPatient: number = 0;
    selectedDOC: number = 0;
    FinishTitle: string = "";
    showPortal = false;
   
    currentUrl: string = null;

    @ViewChild("mainscreenfrom", null) mainscreenfrom: NgForm;
    constructor(private _headerService: ApplicationHeaderService, private _storageHelper: StorageHelper, private _sidebarService: SidebarService, private modalDialog: MatDialog, private _referrerservice: ReferralService,
        private _router: ActivatedRoute, private _navigate: Router, 
        public datepipe: DatePipe) {

       
    }

    ngOnInit() {

       
        this._sidebarService.setActiveState("dtpocnotfoundmessage");
        this._sidebarService.editSidebarShowValue(true);
        this.getIncomingMessageDetail();

        if (this._storageHelper.getItem("loggedInUserDetails") != null) {
            this.loggedInUserDetails = this._storageHelper.getItem("loggedInUserDetails");
        }
       

    }
    OpenXMLView(xmlfile:IIncomingMessageXML) {
      
        this.xmlfile = xmlfile;
       
       // console.log(xmlfile.FileData.toString());
        /* new window */
        //var removedstring1 = xmlfile.FileData.replace('<?xml version="1.0" encoding="UTF-8"?>', '');
        //var FinalXMLString = removedstring1.replace('<?xml-stylesheet type="text/xsl" href="https://ced-a.ms.allscriptscloud.com/ced/4.0/ced.xsl" alternate="no" title="Allscripts Default" ?>', '');
       
        //let XMLFile = new Blob([FinalXMLString], { type: 'text/xml' });
        //let url = URL.createObjectURL(XMLFile);
        //window.open(url,'_blank', 'resizable');
        //URL.revokeObjectURL(url); 

        /*ends here*/
        console.log(xmlfile.XMLContent.firstName);
        var xmlContent = this.xmlfile;
        this.xmlFileContent.FileData = this.xmlfile.FileData.substring(0, this.xmlfile.FileData.indexOf('</recordTarget>') + 15);
        this.xmlFileContent.FileName = this.xmlfile.FileName;
        const dialogRef = this.modalDialog.open(XMLViewDialog, {
            //width: '1070px',
            height: '370px',
            maxWidth: '92vw',
            width:'680px',
            panelClass: 'referrer-dialog-container',
            disableClose: true,
            data: {
                xmlfile: this.xmlFileContent,
                xmlcontent: xmlContent,
                XMLClass: xmlfile.XMLContent
            }
        });

        dialogRef.afterClosed().subscribe(
            result => {
                
            })
    }
    highlightCompleted() {
        console.log('done');
    }
    getIncomingMessageDetail() {
        this.loadingData = true;
        this._router.params.subscribe(params => {
            this.InComingMessageId = Number(params['id'].toString());
            this.requestedAction = params['action'].toString();
            if (this.requestedAction == "referralprocessed") {
                this._referrerservice.getIncomingMessageOperation(this.InComingMessageId,'referralprocessed').subscribe(
                    res => {
                        console.log("response" + res);
                        if (res == "404 : Incoming message does not have attachment") {
                            ModalStaticClass.show(this.modalDialog, "", "Error", "Incoming message does not have attachment", 0, false, 1, "500px", 1);
                            this.redirectMainPage();
                        }
                        else {
                            this._referrerservice.UpdateMessageReadFlag(this.InComingMessageId).subscribe(
                                response => {
                                    console.log('IsReadFlag Updated');
                                }, err => { });

                            this.DTincomingmessagedetail = <IIncomingMessageDetail>res;
                            // this.DTincomingmessagedetail.Received = this.datepipe.transform(this.DTincomingmessagedetail.Received , 'yyyy/MM/dd');

                            this.DTincomingmessagedetail.Action = 'Referral';

                            this.DTIncomingXML.XMLattachment = <IIncomingMessageXML[]>this.DTincomingmessagedetail.XMLattachment;
                            this.DTIncomingXML.TotalRecords = this.DTIncomingXML.XMLattachment.length || 0;
                            this.DTIncomingXML.TotalPages = Math.ceil(this.DTIncomingXML.TotalRecords / this.DTIncomingXML.PageSize);
                            this.DTIncomingXML.CurrentPage = 0;
                            this.angularDataSource = new MatTableDataSource(this.DTIncomingXML.XMLattachment.slice(0, this.DTIncomingXML.PageSize));
                            this.selection = new SelectionModel<IIncomingMessageXML>(false, []);
                            if (this.DTIncomingXML.XMLattachment.length <= 0) {
                                this.noRecordsMessage = "No records found.";
                            }
                            else {
                                this.noRecordsMessage = "";
                            }
                            this.loadingData = false;
                        }


                    },
                    err => { this.loadingData = false; });
            }
            if (this.requestedAction == "pocprocessed") {
                this._referrerservice.getIncomingMessageOperation(this.InComingMessageId, 'pocprocessed').subscribe(
                    res => {
                        console.log("response" + res);
                        if (res == "404 : Incoming message does not have attachment") {
                            ModalStaticClass.show(this.modalDialog, "", "Error", "Incoming message does not have attachment", 0, false, 1, "500px", 1);
                            this.redirectMainPage();
                        }
                        else {
                            this._referrerservice.UpdateMessageReadFlag(this.InComingMessageId).subscribe(
                                response => {
                                    console.log('IsReadFlag Updated');
                                }, err => { });

                            this.DTincomingmessagedetail = <IIncomingMessageDetail>res;
                            // this.DTincomingmessagedetail.Received = this.datepipe.transform(this.DTincomingmessagedetail.Received , 'yyyy/MM/dd');

                            this.DTincomingmessagedetail.Action = 'Plan of care approved';

                            this.DTIncomingXML.XMLattachment = <IIncomingMessageXML[]>this.DTincomingmessagedetail.XMLattachment;
                            this.DTIncomingXML.TotalRecords = this.DTIncomingXML.XMLattachment.length || 0;
                            this.DTIncomingXML.TotalPages = Math.ceil(this.DTIncomingXML.TotalRecords / this.DTIncomingXML.PageSize);
                            this.DTIncomingXML.CurrentPage = 0;
                            this.angularDataSource = new MatTableDataSource(this.DTIncomingXML.XMLattachment.slice(0, this.DTIncomingXML.PageSize));
                            this.selection = new SelectionModel<IIncomingMessageXML>(false, []);
                            if (this.DTIncomingXML.XMLattachment.length <= 0) {
                                this.noRecordsMessage = "No records found.";
                            }
                            else {
                                this.noRecordsMessage = "";
                            }
                            this.loadingData = false;
                        }


                    },
                    err => { this.loadingData = false; });
            }
            if (this.requestedAction == "declinedprocessed") {
                this._referrerservice.getIncomingMessageOperation(this.InComingMessageId, 'declinedprocessed').subscribe(
                    res => {
                        console.log("response" + res);
                        if (res == "404 : Incoming message does not have attachment") {
                            ModalStaticClass.show(this.modalDialog, "", "Error", "Incoming message does not have attachment", 0, false, 1, "500px", 1);
                            this.redirectMainPage();
                        }
                        else {
                            this._referrerservice.UpdateMessageReadFlag(this.InComingMessageId).subscribe(
                                response => {
                                    console.log('IsReadFlag Updated');
                                }, err => { });

                            this.DTincomingmessagedetail = <IIncomingMessageDetail>res;
                            // this.DTincomingmessagedetail.Received = this.datepipe.transform(this.DTincomingmessagedetail.Received , 'yyyy/MM/dd');

                            this.DTincomingmessagedetail.Action = 'Plan of care approved';

                            this.DTIncomingXML.XMLattachment = <IIncomingMessageXML[]>this.DTincomingmessagedetail.XMLattachment;
                            this.DTIncomingXML.TotalRecords = this.DTIncomingXML.XMLattachment.length || 0;
                            this.DTIncomingXML.TotalPages = Math.ceil(this.DTIncomingXML.TotalRecords / this.DTIncomingXML.PageSize);
                            this.DTIncomingXML.CurrentPage = 0;
                            this.angularDataSource = new MatTableDataSource(this.DTIncomingXML.XMLattachment.slice(0, this.DTIncomingXML.PageSize));
                            this.selection = new SelectionModel<IIncomingMessageXML>(false, []);
                            if (this.DTIncomingXML.XMLattachment.length <= 0) {
                                this.noRecordsMessage = "No records found.";
                            }
                            else {
                                this.noRecordsMessage = "";
                            }
                            this.loadingData = false;
                        }


                    },
                    err => { this.loadingData = false; });
            }
            else if (this.requestedAction == "sentforapproval") {
                this._referrerservice.getIncomingMessageOperation(this.InComingMessageId, 'sentforapproval').subscribe(
                    res => {
                        console.log("response" + res);
                        if (res == "404 : Incoming message does not have attachment") {
                            ModalStaticClass.show(this.modalDialog, "", "Error", "Incoming message does not have attachment", 0, false, 1, "500px", 1);
                            this.redirectMainPage();
                        }
                        else {
                            this._referrerservice.UpdateMessageReadFlag(this.InComingMessageId).subscribe(
                                response => {
                                    console.log('IsReadFlag Updated');
                                }, err => { });

                            this.DTincomingmessagedetail = <IIncomingMessageDetail>res;
                            // this.DTincomingmessagedetail.Received = this.datepipe.transform(this.DTincomingmessagedetail.Received , 'yyyy/MM/dd');

                            this.DTincomingmessagedetail.Action = 'Plan of care approved';

                            this.DTIncomingXML.XMLattachment = <IIncomingMessageXML[]>this.DTincomingmessagedetail.XMLattachment;
                            this.DTIncomingXML.TotalRecords = this.DTIncomingXML.XMLattachment.length || 0;
                            this.DTIncomingXML.TotalPages = Math.ceil(this.DTIncomingXML.TotalRecords / this.DTIncomingXML.PageSize);
                            this.DTIncomingXML.CurrentPage = 0;
                            this.angularDataSource = new MatTableDataSource(this.DTIncomingXML.XMLattachment.slice(0, this.DTIncomingXML.PageSize));
                            this.selection = new SelectionModel<IIncomingMessageXML>(false, []);
                            if (this.DTIncomingXML.XMLattachment.length <= 0) {
                                this.noRecordsMessage = "No records found.";
                            }
                            else {
                                this.noRecordsMessage = "";
                            }
                            this.loadingData = false;
                        }


                    },
                    err => { this.loadingData = false; });
            }
            else if (this.requestedAction == "edit"){
                this._referrerservice.getIncomingMessageOperation(this.InComingMessageId,'Edit').subscribe(
                    res => {
                        console.log("response" + res);
                        if (res == "404 : Incoming message does not have attachment") {
                            ModalStaticClass.show(this.modalDialog, "", "Error", "Incoming message does not have attachment", 0, false, 1, "500px", 1);
                            this.redirectMainPage();
                        }
                        else {
                            this._referrerservice.UpdateMessageReadFlag(this.InComingMessageId).subscribe(
                                response => {
                                    console.log('IsReadFlag Updated');
                                }, err => { });

                            this.DTincomingmessagedetail = <IIncomingMessageDetail>res;
                            // this.DTincomingmessagedetail.Received = this.datepipe.transform(this.DTincomingmessagedetail.Received , 'yyyy/MM/dd');

                            this.DTIncomingXML.XMLattachment = <IIncomingMessageXML[]>this.DTincomingmessagedetail.XMLattachment;
                            this.DTIncomingXML.TotalRecords = this.DTIncomingXML.XMLattachment.length || 0;
                            this.DTIncomingXML.TotalPages = Math.ceil(this.DTIncomingXML.TotalRecords / this.DTIncomingXML.PageSize);
                            this.DTIncomingXML.CurrentPage = 0;
                            this.angularDataSource = new MatTableDataSource(this.DTIncomingXML.XMLattachment.slice(0, this.DTIncomingXML.PageSize));
                            this.selection = new SelectionModel<IIncomingMessageXML>(false, []);
                            if (this.DTIncomingXML.XMLattachment.length <= 0) {
                                this.noRecordsMessage = "No records found.";
                            }
                            else {
                                this.noRecordsMessage = "";
                            }
                            this.loadingData = false;
                        }


                    },
                    err => { this.loadingData = false; });
            }
            else if (this.requestedAction == "readonly") {
                this._referrerservice.getIncomingMessageOperation(this.InComingMessageId, 'Edit').subscribe(
                    res => {
                        console.log("response" + res);
                        if (res == "404 : Incoming message does not have attachment") {
                            ModalStaticClass.show(this.modalDialog, "", "Error", "Incoming message does not have attachment", 0, false, 1, "500px", 1);
                            this.redirectMainPage();
                        }
                        else {
                            this._referrerservice.UpdateMessageReadFlag(this.InComingMessageId).subscribe(
                                response => {
                                    console.log('IsReadFlag Updated');
                                }, err => { });

                            this.DTincomingmessagedetail = <IIncomingMessageDetail>res;
                            // this.DTincomingmessagedetail.Received = this.datepipe.transform(this.DTincomingmessagedetail.Received , 'yyyy/MM/dd');

                            this.DTIncomingXML.XMLattachment = <IIncomingMessageXML[]>this.DTincomingmessagedetail.XMLattachment;
                            this.DTIncomingXML.TotalRecords = this.DTIncomingXML.XMLattachment.length || 0;
                            this.DTIncomingXML.TotalPages = Math.ceil(this.DTIncomingXML.TotalRecords / this.DTIncomingXML.PageSize);
                            this.DTIncomingXML.CurrentPage = 0;
                            this.angularDataSource = new MatTableDataSource(this.DTIncomingXML.XMLattachment.slice(0, this.DTIncomingXML.PageSize));
                            this.selection = new SelectionModel<IIncomingMessageXML>(false, []);
                            if (this.DTIncomingXML.XMLattachment.length <= 0) {
                                this.noRecordsMessage = "No records found.";
                            }
                            else {
                                this.noRecordsMessage = "";
                            }
                            this.loadingData = false;
                        }


                    },
                    err => { this.loadingData = false; });
            }
           

        }, err => { this.loadingData = false; });
    }
    getPaginationData(pageEvent: any) {
        if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.DTIncomingXML.CurrentPage = pageEvent.pageIndex;
            this.DTIncomingXML.PageSize = pageEvent.pageSize;
            this.angularDataSource.data = this.DTIncomingXML.XMLattachment.slice((this.DTIncomingXML.CurrentPage * this.DTIncomingXML.PageSize), (((this.DTIncomingXML.CurrentPage + 1) * this.DTIncomingXML.PageSize) + 1));
            this.angularDataSource.sort = this.sort;
        }
        else {
            this.angularDataSource.data = this.DTIncomingXML.XMLattachment.slice(0, pageEvent.pageSize);
            this.angularDataSource.sort = this.sort;
        }
    }
    OnItemChange(value) {
        console.log(value);

        //this.DTincomingmessagedetailprocessed.AttachmentID = value;
        //var selectedattachmntdata = this.DTincomingmessagedetail.XMLattachment.find((x) => {
        //    if (x.AttachmentID == value) {
        //        return x;
        //    }
        //});
        //this.DTincomingmessagedetailprocessed.FileData = selectedattachmntdata.FileData;
        //this.DTincomingmessagedetailprocessed.FileName = selectedattachmntdata.FileName;
        console.log(value);
        this.DTincomingmessagedetailprocessed.Action = value;
    }
    
    acceptDetails() {
        this.loadingData = true;
        
        this.acceptpatient.InpatientID = 0;
        
        this.acceptpatient.InincomingmessageID = this.DTincomingmessagedetail.ID;;
        this.acceptpatient.InUserID = this.loggedInUserDetails.LoginName;
        this.acceptpatient.AttachmentID = this.DTincomingmessagedetailprocessed.AttachmentID;

       
            this._referrerservice.AcceptPatient(this.acceptpatient).subscribe(
                response => {
                    this.loadingData = false;
                    ModalStaticClass.show(this.modalDialog, "", "Success", "Details processed successfully.", 0, false, 1, "500px", 0);
                },
                err => {
                    this.loadingData = false;
                    ModalStaticClass.show(this.modalDialog, "", "Error", "Unable to accept / Reject patient, please contact administrator.", 0, false, 1, "500px", 1);
                });
       
        
           
    }
    rejectDetails() {
        this.loadingData = true;
        this.loadingData = true;

        this.rejectpatient.InpatientID = null;
        this.rejectpatient.InincomingmessageID = this.DTincomingmessagedetail.ID;;
        this.rejectpatient.InUserID = this.loggedInUserDetails.LoginName;
        this.acceptpatient.AttachmentID = this.DTincomingmessagedetailprocessed.AttachmentID;
        this._referrerservice.RejectPatient(this.rejectpatient).subscribe(
            res => {
                this.loadingData = false;
                //ModalStaticClass.show(this.modalDialog, "", "Success", "Details processed successfully.", 0, false, 1, "500px", 0);
                var response = <IResponseEntity>res;
                if (response.ErrorCode == "200") {
                    this.loadingData = false;
                    ModalStaticClass.show(this.modalDialog, "", "Success", response.ErrorCode + " : " + response.ErrorMessage, 0, false, 1, "500px", 0);
                    this.redirectMainPage();
                }
                else {
                    ModalStaticClass.show(this.modalDialog, "", "Error", "502 : Patient reject could not be processed sucessfully. Please contact IT support.", 0, false, 1, "500px", 0);
                    this.redirectMainPage();
                }

            },
            err => {

            this.loadingData = false;
                ModalStaticClass.show(this.modalDialog, "", "Error", "Unable to accept / Reject patient, please contact administrator.", 0, false, 1, "500px", 1);
            });
    }
    createDetails() {
        ModalStaticClass.show(this.modalDialog, "", "Confirm", "Are you sure, this could create a duplicate patient?", 2, false, 0, "500px", 3)
            .subscribe(res => {
                if (res.result == 'yes') {
                    this.loadingData = true;
                    debugger;
                    //console.log(this.selectedPatient);
                    //this.acceptpatient.InpatientID = this.selectedPatient;
                    this.acceptpatient.InpatientID = 0;

                    this.acceptpatient.InincomingmessageID = this.DTincomingmessagedetail.ID;;
                    this.acceptpatient.InUserID = this.loggedInUserDetails.LoginName;
                    this.acceptpatient.AttachmentID = this.DTincomingmessagedetailprocessed.AttachmentID;
                    this._referrerservice.GetRehabReferrerList(this.acceptpatient).subscribe(
                        response => {
                            this.loadingData = false;
                            this.responsereferrerlist = <IReferrer[]>response;
                            if (this.responsereferrerlist != null) {

                                this.referrerlist.rehabReferrers = <IReferrer[]>this.responsereferrerlist;
                                this.referrerlist.TotalRecords = this.referrerlist.rehabReferrers.length || 0;
                                this.referrerlist.TotalPages = Math.ceil(this.referrerlist.TotalRecords / this.referrerlist.PageSize);
                                this.referrerlist.CurrentPage = 0;
                                this.referrerDataSource = new MatTableDataSource(this.referrerlist.rehabReferrers.slice(0, this.referrerlist.PageSize));
                                
                                const dialogRef = this.modalDialog.open(ReferrerDialog, {
                                    //width: '1070px',
                                    height: '500px',
                                    maxWidth: '350vw',
                                    width: '950px',
                                    panelClass: 'referrer-dialog-container',
                                    disableClose: true,
                                    data: {
                                        referrerlist: this.referrerlist,
                                        referrerDataSource: this.referrerDataSource,
                                        patient: this.acceptpatient
                                       

                                    }
                                });

                                dialogRef.afterClosed().subscribe(
                                    result => {
                                        dialogRef.close();
                                   })
                               
                                //setTimeout(() => this.gotoNextStepTemp(), 500);
                            }
                            else {

                                ModalStaticClass.show(this.modalDialog, "", "Error", "No referrer Data exists", 0, false, 1, "500px", 1);

                            }
                        },
                        err => {
                            this.loadingData = false;
                            ModalStaticClass.show(this.modalDialog, "", "Error", "Unable to accept / Reject patient, please contact administrator.", 0, false, 1, "500px", 1);
                        });
                }
            });
    }
    importDetails(patientId:any) {
        this.loadingData = true;
       // console.log(this.selectedPatient);
      //  this.acceptpatient.InpatientID = this.selectedPatient;
        this.acceptpatient.InpatientID = patientId;
        this.acceptpatient.InincomingmessageID = this.DTincomingmessagedetail.ID;;
        this.acceptpatient.InUserID = this.loggedInUserDetails.LoginName;
        this.acceptpatient.AttachmentID = this.DTincomingmessagedetailprocessed.AttachmentID;
        this._referrerservice.ImportPatient(this.acceptpatient).subscribe(
            res => {
                var response = <IResponseEntity>res;
                if (response.ErrorCode == "200") {
                    this.loadingData = false;
                    ModalStaticClass.show(this.modalDialog, "", "Success", response.ErrorCode + " : " + response.ErrorMessage, 0, false, 1, "500px", 0);
                    this.redirectMainPage();
                }
                else {
                    ModalStaticClass.show(this.modalDialog, "", "Error", "502 : Patient importing could not be processed sucessfully. Please contact IT support.", 0, false, 1, "500px", 0);
                    this.redirectMainPage();
                }
               
            },
            err => {
            this.loadingData = false;
                ModalStaticClass.show(this.modalDialog, "", "Error", "Unable to accept / Reject / import, please contact administrator.", 0, false, 1, "500px", 1);});

    }
    processPOC() {
        this.DTPOC.Docrowid = this.selectedDOC;
        if (this.DTPOC.Docrowid != null &&
            this.DTPOC.Docrowid != undefined &&
            this.DTPOC.Docrowid != 0) {
            this.loadingData = true;
            this._referrerservice.ProcessPOC(this.DTPatient.Prowid, this.DTincomingmessageResponse.Operation, this.DTincomingmessagedetail.ID, this.DTPOC.Docrowid,
                this.DTPOC.PDFName, this.loggedInUserDetails.LoginName, this.DTincomingmessagedetailprocessed.AttachmentID).subscribe(
                    res => {
                        this.loadingData = false;
                      
                        var response = <IResponseEntity>res;
                        if (response.ErrorCode == "200") {
                            this.loadingData = false;
                            ModalStaticClass.show(this.modalDialog, "", "Success", response.ErrorCode + " : " + response.ErrorMessage, 0, false, 1, "500px", 0);
                            this.redirectMainPage();
                        }
                        else {
                            ModalStaticClass.show(this.modalDialog, "", "Error", "502 : Plan of Care Approval could not be processed successfully. Please contact IT support.", 0, false, 1, "500px", 0);
                            this.redirectMainPage();
                        }
                    }, err => {
                        this.loadingData = false;
                        ModalStaticClass.show(this.modalDialog, "", "Error", "something went wrong", 0, false, 1, "500px", 0);

                    });

        }
        else {
            ModalStaticClass.show(this.modalDialog, "", "Error", "Please choose POC to Process", 0, false, 1, "500px", 1);
        }
    }
    getPDF(event:any) {
        //let file = new Blob([event.Attachment], { type: 'application/pdf' });  
        //saveAs(file, 'testing.pdf');

     
            this.loadingData = true;
          
        this._referrerservice.DownloadPOCFile(event.Docrowid).subscribe(
                res => {
                    var contentType = res.headers.get('content-type');
                    var blob = new Blob([res.body], { type: contentType });
                    saveAs(blob, 'sample.pdf');
                        //var url = window.URL.createObjectURL(blob);
                        //window.open(url);
                    res;
                    this.loadingData = false;
                   
                }, err => {
                    this.loadingData = false;
                   
                    ModalStaticClass.show(this.modalDialog, "", "Error", "There was an error while downloading the report.", 0, false, 1, "500px");
                });

        
    }
    getPOCDetails() {
        this.loadingData = true;
        this.DTPatient.Prowid = this.selectedPatient;
        console.log("patientid" + this.selectedPatient);
        if (this.DTPatient.Prowid != null &&
            this.DTPatient.Prowid != undefined &&
            this.DTPatient.Prowid != 0) {
            if (this.DTincomingmessageResponse.Operation == 'Referral') {
                this._referrerservice.getPOCList(this.DTPatient.Prowid, this.DTincomingmessageResponse.Operation ).subscribe(
                    response => {
                        this.loadingData = false;
                        this.DTincomingmessageResponse = <IIncomingMessageOperation>response;
                        if (this.DTincomingmessageResponse.DT_POCs != null && this.DTincomingmessageResponse.DT_POCs.length > 0) {

                            this.DTPOCs.IncomingMessagePOCs = <IIncomingMessagePOC[]>this.DTincomingmessageResponse.DT_POCs;
                            this.DTPOCs.TotalRecords = this.DTincomingmessageResponse.DT_POCs.length || 0;
                            this.DTPOCs.TotalPages = Math.ceil(this.DTPOCs.TotalRecords / this.DTPOCs.PageSize);
                            this.DTPOCs.CurrentPage = 0;
                            this.pocDataSource = new MatTableDataSource(this.DTPOCs.IncomingMessagePOCs.slice(0, this.DTPOCs.PageSize));
                            this.pocselection = new SelectionModel<IIncomingMessagePOC>(false, []);
                            if (this.DTPOCs.IncomingMessagePOCs.length <= 0) {
                                this.nopocRecordsMessage = "No records found.";
                            }
                            else {
                                this.nopocRecordsMessage = "";
                            }
                         
                          
                        }
                        else {
                           
                            ModalStaticClass.show(this.modalDialog, "", "Confirmation", "Please Accept OR Reject Patient", 0, false, 1, "500px", 3);
                          
                           
                        }
                    }, err => {
                    this.loadingData = false;
                        ModalStaticClass.show(this.modalDialog, "", "Error", "something went wrong", 0, false, 1, "500px", 1);});
            }
            else if (this.DTincomingmessageResponse.Operation == 'Plan of care approved') {
                this._referrerservice.getPOCList(this.DTPatient.Prowid, this.DTincomingmessageResponse.Operation).subscribe(
                    response => {
                        this.loadingData = false;
                        this.DTincomingmessageResponse = <IIncomingMessageOperation>response;
                        if (this.DTincomingmessageResponse.DT_POCs != null && this.DTincomingmessageResponse.DT_POCs.length > 0) {

                            this.DTPOCs.IncomingMessagePOCs = <IIncomingMessagePOC[]>this.DTincomingmessageResponse.DT_POCs;
                            this.DTPOCs.TotalRecords = this.DTincomingmessageResponse.DT_POCs.length || 0;
                            this.DTPOCs.TotalPages = Math.ceil(this.DTPOCs.TotalRecords / this.DTPOCs.PageSize);
                            this.DTPOCs.CurrentPage = 0;
                            this.pocDataSource = new MatTableDataSource(this.DTPOCs.IncomingMessagePOCs.slice(0, this.DTPOCs.PageSize));
                            this.pocselection = new SelectionModel<IIncomingMessagePOC>(false, []);
                            if (this.DTPOCs.IncomingMessagePOCs.length <= 0) {
                                this.nopocRecordsMessage = "No records found.";
                            }
                            else {
                                this.nopocRecordsMessage = "";
                            }
                            //this.wizard.goToNextStep();
                            setTimeout(() => this.gotoNextStepTemp(), 500);
                        }
                        else {

                            ModalStaticClass.show(this.modalDialog, "", "Error", "No POC Exist for Patient", 0, false, 1, "500px", 1);

                        }
                    }, err => {
                    this.loadingData = false;
                        ModalStaticClass.show(this.modalDialog, "", "Error", "something went wrong", 0, false, 1, "500px", 1);});
            }
            else if (this.DTincomingmessageResponse.Operation == 'Plan of care declined') {
                this._referrerservice.getPOCList(this.DTPatient.Prowid, this.DTincomingmessageResponse.Operation).subscribe(
                    response => {
                        this.loadingData = false;
                        this.DTincomingmessageResponse = <IIncomingMessageOperation>response;
                        if (this.DTincomingmessageResponse.DT_POCs != null && this.DTincomingmessageResponse.DT_POCs.length > 0) {

                            this.DTPOCs.IncomingMessagePOCs = <IIncomingMessagePOC[]>this.DTincomingmessageResponse.DT_POCs;
                            this.DTPOCs.TotalRecords = this.DTincomingmessageResponse.DT_POCs.length || 0;
                            this.DTPOCs.TotalPages = Math.ceil(this.DTPOCs.TotalRecords / this.DTPOCs.PageSize);
                            this.DTPOCs.CurrentPage = 0;
                            this.pocDataSource = new MatTableDataSource(this.DTPOCs.IncomingMessagePOCs.slice(0, this.DTPOCs.PageSize));
                            this.pocselection = new SelectionModel<IIncomingMessagePOC>(false, []);
                            if (this.DTPOCs.IncomingMessagePOCs.length <= 0) {
                                this.nopocRecordsMessage = "No records found.";
                            }
                            else {
                                this.nopocRecordsMessage = "";
                            }
                           // this.wizard.goToNextStep();
                            setTimeout(() => this.gotoNextStepTemp(), 500);
                        }
                        else {

                            ModalStaticClass.show(this.modalDialog, "", "Error", "No POC Exist for Patient", 0, false, 1, "500px", 1);

                        }
                    }, err => {
                    this.loadingData = false;
                        ModalStaticClass.show(this.modalDialog, "", "Error", "something went wrong", 0, false, 1, "500px", 1);});
            }

        }
        else {
            this.loadingData = false;
            ModalStaticClass.show(this.modalDialog, "", "Error", "Please fill required data", 0, false, 1, "500px", 1);
        }
    }
    saveDetails() {
        this.loadingData = true;
        // var detailsToBeSent: IPersonalization = { TNumber: this.data.personalizationDetails.TNumber, PersonalizationDetails: this.dataSource.data }
        if (this.mainscreenfrom.valid && this.DTincomingmessagedetailprocessed.FileName != undefined &&
            this.DTincomingmessagedetailprocessed.FileName != null &&
            this.DTincomingmessagedetailprocessed.FileName !="") {
            this.DTincomingmessagedetailprocessed.InComingMessageID = this.DTincomingmessagedetail.ID;

            this.DTincomingmessagedetailprocessed.Username = this.loggedInUserDetails.LoginName;

            this._referrerservice.processIncomingMesssage(this.DTincomingmessagedetailprocessed).subscribe(
                response => {
                   
                    this.loadingData = false;
                    //ModalStaticClass.show(this.modalDialog, "", "Success", "Details processed successfully.", 0, false, 1, "500px", 0);
                    this.DTincomingmessageResponse = <IIncomingMessageOperation>response;
                  //this.DTincomingmessageResponse.DT_Patients = [];
                    if (this.DTincomingmessageResponse.Operation == 'Referral') {

                        if (this.DTincomingmessageResponse.DT_Patients != null && this.DTincomingmessageResponse.DT_Patients.length > 0) {
                            
                           

                          //  this.wizard.goToNextStep();
                           // console.log('nextstep'+this.wizard.canGoToStep(1));
                            
                            //this.wizard.goToNextStep();

                            this.DTPatients.IncomingMessagePatients = <IIncomingMessagePatient[]>this.DTincomingmessageResponse.DT_Patients;
                            this.DTPatients.TotalRecords = this.DTincomingmessageResponse.DT_Patients.length || 0;
                            this.DTPatients.TotalPages = Math.ceil(this.DTPatients.TotalRecords / this.DTPatients.PageSize);
                            this.DTPatients.CurrentPage = 0;
                            this.patientDataSource = new MatTableDataSource(this.DTPatients.IncomingMessagePatients.slice(0, this.DTPatients.PageSize));
                            this.patientselection = new SelectionModel<IIncomingMessagePatient>(false, []);
                            if (this.DTPatients.IncomingMessagePatients.length <= 0) {
                                this.nopatientRecordsMessage = "No records found.";
                            }
                            else {
                                this.nopatientRecordsMessage = "";
                            }
                            //this.wizard.goToNextStep();
                            
                            setTimeout(()=>this.gotoNextStepTemp(), 500);
                            this.FinishTitle = "2";
                        }
                        else {
                            this.IsRefererrPatientExist = true;
                           // ModalStaticClass.show(this.modalDialog, "", "Confirmation", "Please Accept OR Reject Patient", 0, false, 1, "500px", 3);
                            //document.getElementById("acceptID").focus();
                            this.acceptpatient.InpatientID = 0;
                            this.acceptpatient.InincomingmessageID = this.DTincomingmessagedetail.ID;;
                            this.acceptpatient.InUserID = this.loggedInUserDetails.LoginName;
                            this.acceptpatient.AttachmentID = this.DTincomingmessagedetailprocessed.AttachmentID;
                            const dialogRef = this.modalDialog.open(PatientDialog, {
                                width: '500px',
                                height: '200px',
                                panelClass: 'referrer-dialog-container',
                                disableClose: true,
                                data: {
                                    patientData: this.acceptpatient
                                }
                            });

                            dialogRef.afterClosed().subscribe(
                                result => {
                                    this.redirectMainPage();
                                    dialogRef.close();
                                })
                        }

                    }
                    else if (this.DTincomingmessageResponse.Operation == 'Plan of care approved') {
                        this.IsRefererralstep2 = true;
                        if (this.DTincomingmessageResponse.DT_Patients != null && this.DTincomingmessageResponse.DT_Patients.length > 0 && this.DTincomingmessageResponse.DT_Patients[0].FirstName != null && this.DTincomingmessageResponse.DT_Patients[0].FirstName != "") {
                            this.DTPatients.IncomingMessagePatients = <IIncomingMessagePatient[]>this.DTincomingmessageResponse.DT_Patients;
                            this.DTPatients.TotalRecords = this.DTincomingmessageResponse.DT_Patients.length || 0;
                            this.DTPatients.TotalPages = Math.ceil(this.DTPatients.TotalRecords / this.DTPatients.PageSize);
                            this.DTPatients.CurrentPage = 0;
                            this.patientDataSource = new MatTableDataSource(this.DTPatients.IncomingMessagePatients.slice(0, this.DTPatients.PageSize));
                            this.patientselection = new SelectionModel<IIncomingMessagePatient>(false, []);
                            if (this.DTPatients.IncomingMessagePatients.length <= 0) {
                                this.nopatientRecordsMessage = "No records found.";
                            }
                            else {
                                this.nopatientRecordsMessage = "";
                            }

                            setTimeout(() => this.gotoNextStepTemp(), 500);
                        }
                        else if (this.DTincomingmessageResponse.DT_Patients != null && this.DTincomingmessageResponse.DT_Patients.length == 1 && (this.DTincomingmessageResponse.DT_Patients[0].FirstName == null || this.DTincomingmessageResponse.DT_Patients[0].FirstName == "")) {
                            ModalStaticClass.show(this.modalDialog, "", "Success", "200 : Plan of care Approval Processed Successfully. Patient MRN is " + this.DTincomingmessageResponse.DT_Patients[0].MRNNumber, 0, false, 1, "500px", 1);
                            this.redirectMainPage();

                            // WHEN outgoingmessage id is not present but patient id and note id present.
                        }
                        else{
                            ModalStaticClass.show(this.modalDialog, "", "Success", "404 : Patient not found", 0, false, 1, "500px", 1);
                            this.redirectMainPage();
                        }
                        this.FinishTitle = "3";
                    }
                    //else if (this.DTincomingmessageResponse.Operation == 'Plan of care declined') {
                    //    this.IsRefererralstep2 = true;
                    //    if (this.DTincomingmessageResponse.DT_Patients != null && this.DTincomingmessageResponse.DT_Patients.length > 0) {
                    //        this.DTPatients.IncomingMessagePatients = <IIncomingMessagePatient[]>this.DTincomingmessageResponse.DT_Patients;
                    //        this.DTPatients.TotalRecords = this.DTincomingmessageResponse.DT_Patients.length || 0;
                    //        this.DTPatients.TotalPages = Math.ceil(this.DTPatients.TotalRecords / this.DTPatients.PageSize);
                    //        this.DTPatients.CurrentPage = 0;
                    //        this.patientDataSource = new MatTableDataSource(this.DTPatients.IncomingMessagePatients.slice(0, this.DTPatients.PageSize));
                    //        this.patientselection = new SelectionModel<IIncomingMessagePatient>(false, []);
                    //        if (this.DTPatients.IncomingMessagePatients.length <= 0) {
                    //            this.nopatientRecordsMessage = "No records found.";
                    //        }
                    //        else {
                    //            this.nopatientRecordsMessage = "";
                    //        }
                    //        setTimeout(() => this.gotoNextStepTemp(), 500);
                    //    }
                    //    else if (this.DTincomingmessageResponse.DT_Patients == []) {
                    //        ModalStaticClass.show(this.modalDialog, "", "Success", "Record Processed Successfully", 0, false, 1, "500px", 1);
                    //        this.redirectMainPage();
                    //    }
                    //    else {
                    //        ModalStaticClass.show(this.modalDialog, "", "Success", "Patient not found", 0, false, 1, "500px", 1);
                    //        this.redirectMainPage();
                    //    }
                    //    this.FinishTitle = "3";
                    //}

                    this.loadingData = false;

                }, err => {
                    this.loadingData = false;
                    ModalStaticClass.show(this.modalDialog, "", "Error", "something went wrong", 0, false, 1, "500px", 1);
                });
            
        }
        else {
            this.loadingData = false;
            ModalStaticClass.show(this.modalDialog, "","Error", "Please fill required data",0, false, 1, "500px", 1);
        }
           

    }
   
    //ngAfterViewChecked(){
    //    console.log('view checked ' + this.wizard);
    //}
    //ngAfterContentInit() {
    //    console.log('after content ' + this.wizard);
    //}
    
    //ngAfterViewInit() {
    //    console.log('view rendered');
    //    console.log(this.wizard.currentStep);
    //}
    //ngOnChanges() {
    //    console.log('on changes');
    //}
    gotoNextStepTemp() {
        this.wizard.goToNextStep();
    }
    redirectMainPage() {
       
        //this._navigate.navigateByUrl("/referrer/incomingmessage");
        const { redirect } = window.history.state;


        this._navigate.navigate([redirect ], { state: { redirect: this._navigate.url } });
        
    }
    getPatientPaginationData(pageEvent: any) {
        if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.DTPatients.CurrentPage = pageEvent.pageIndex;
            this.DTPatients.PageSize = pageEvent.pageSize;
            this.patientDataSource.data = this.DTPatients.IncomingMessagePatients.slice((this.DTPatients.CurrentPage * this.DTPatients.PageSize), (((this.DTPatients.CurrentPage + 1) * this.DTPatients.PageSize) + 1));
            this.patientDataSource.sort = this.sort;
        }
        else {
            this.patientDataSource.data = this.DTPatients.IncomingMessagePatients.slice(0, pageEvent.pageSize);
            this.patientDataSource.sort = this.sort;
        }
    }
    getPOCPaginationData(pageEvent: any) {
        if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.DTPOCs.CurrentPage = pageEvent.pageIndex;
            this.DTPOCs.PageSize = pageEvent.pageSize;
            this.pocDataSource.data = this.DTPOCs.IncomingMessagePOCs.slice((this.DTPOCs.CurrentPage * this.DTPOCs.PageSize), (((this.DTPOCs.CurrentPage + 1) * this.DTPOCs.PageSize) + 1));
            this.pocDataSource.sort = this.sort;
        }
        else {
            this.pocDataSource.data = this.DTPOCs.IncomingMessagePOCs.slice(0, pageEvent.pageSize);
            this.pocDataSource.sort = this.sort;
        }
    }
    patientselectionfunction(value) {
        this.patientselection.toggle(value);
        if (this.patientselection.selected.length > 0) {
            this.patientitemSelected = true;
        }
        else {
            this.patientitemSelected = false;
        }

        console.log(value);

        this.DTPatient.Prowid = value.Prowid;
      
        //this.DTincomingmessagedetailprocessed.FileData = selectedattachmntdata.FileData;
        //this.DTincomingmessagedetailprocessed.FileName = selectedattachmntdata.FileName;
    }
    selectionfunction(value) {
        console.log("xml" + value);
        this.selection.toggle(value);
        if (this.selection.selected.length > 0) {
            this.xmlSelected = true;
        }
        else {
            this.xmlSelected = false;
        }

        console.log(value);
        this.DTincomingmessagedetailprocessed.AttachmentID = value.AttachmentID;
        var selectedattachmntdata = this.DTincomingmessagedetail.XMLattachment.find(x => x.InComingMessageID = value.AttachmentID);
        this.DTincomingmessagedetailprocessed.FileData = selectedattachmntdata.FileData;
        this.DTincomingmessagedetailprocessed.FileName = selectedattachmntdata.FileName;
    }
    pocselectionfunction(value) {
       this.pocselection.toggle(value);
       if (this.pocselection.selected.length > 0) {
            this.pocitemSelected = true;
        }
        else {
           this.pocitemSelected = false;
        }

        console.log(value);

       this.DTPOC.Docrowid = value.Docrowid;
       this.DTPOC.PDFName = value.PDFName;
       var selectedattachmntdata = this.DTPOCs.IncomingMessagePOCs.find((x) => {
           if (x.Docrowid == value.Docrowid) {
                return x;
            }
        });
       
    }
    goToNextStep() {
        debugger;
        var flag = false;
        if (!this.wizard) { return false; }
        const currentStep = this.wizard.currentStepIndex;
        if (currentStep === 0) {
            flag = true;
            //if (this.mainscreenfrom.valid) {
            //    flag = true;
            //}
            //this.saveDetails();

        } else if (currentStep == 1) {
            flag = true;
        } else if (currentStep == 2) {

        }

        if (flag) {
            if (currentStep === 0) {
               

                this.wizard.goToNextStep();
            }
            else if (currentStep == 1) {
                this.wizard.goToNextStep();
               // this.moveCatTab();
                //this.openCategoryAllocationModal();
            }
            else if (currentStep == 2) {
                //this.finishButtonClicked();

            }
        }
    }
    moveCatTab() {
        this.wizard.goToNextStep();
    }
    goToPreviousStep() {
        this.wizard.goToPreviousStep();
    }
    public get hasPreviousStep(): boolean {
        if (!this.wizard) { return false; }

        return this.wizard.hasPreviousStep();
    }
    public get isLastStep(): boolean {
        if (!this.wizard) { return false; }

        return this.wizard.isLastStep();
    }

   
}
@Component({
    selector: 'xml-dialog',
    templateUrl: 'admin-dialog.component.html',
    styleUrls: ['./dtincoming-message-detail.component.scss']
})
export class XMLViewDialog implements OnInit {
    // dataSource: MatTableDataSource<IPersonalizationDetails>;
   
    loadingData: boolean = false;
    defaultValues: IIncomingMessageXML = {};
    xmlmodalContent: IIncomingMessageXML = {};
    xmlclass: IIncomingMessageXMLContent = {};
    content = 'Angular highlight text';
    query_conversation: string = "";
    selectedSpendPoolHigh: string = "";
    

    @ViewChild(MatSort, { static: true }) personalizeSort: MatSort;
    @ViewChild("alloDataForm", null) alloDataForm: NgForm;
    constructor(public dialogRef: MatDialogRef<XMLViewDialog>,
        private _referrerservice: ReferralService,
        private modalDialog: MatDialog, private _sharedService: SharedService,
        @Inject(MAT_DIALOG_DATA) public data?: any) {


        this.defaultValues = this.data.xmlfile;
        this.xmlmodalContent = this.data.xmlcontent;
       // this.defaultValues = vkbeautify.xml(this.data.xmlfile);
        this.xmlclass = this.data.XMLClass;
        console.log(this.xmlclass.firstName);
    }
    ngOnInit() {
        
    }
    closeDialog() {
        this.dialogRef.close();
    }
    viewMore() {
        console.log(this.xmlmodalContent.FileData);
        var removedstring1 = this.xmlmodalContent.FileData.replace('<?xml version="1.0" encoding="UTF-8"?>', '');
        var FinalXMLString = removedstring1.replace('<?xml-stylesheet type="text/xsl" href="https://ced-a.ms.allscriptscloud.com/ced/4.0/ced.xsl" alternate="no" title="Allscripts Default" ?>', '');

        FinalXMLString = FinalXMLString.replace('<?xml-stylesheet type="text/xsl" href="CCDA.xsl"?>', '');
        let XMLFile = new Blob([FinalXMLString], { type: 'text/xml' });

        let url = URL.createObjectURL(XMLFile);
        window.open(url,'_blank', 'resizable');
        URL.revokeObjectURL(url)
    }

}

@Component({
    selector: 'patient-dialog',
    templateUrl: 'patient-dialog.component.html',
})
export class PatientDialog implements OnInit {
    displayedColumns = ['FirstName', 'LastName', 'BirthDate', 'Address1', 'City', 'State', 'ZipCode', 'CellPh', 'TherapistName','Note'];
    DTPatients: IIncomingMessagePatientPage = { PageSize: 20, MaxPageSize: 30 };
    DTincomingmessageResponse: IIncomingMessageOperation = {};
    patientDataSource: MatTableDataSource<IIncomingMessagePatient> = new MatTableDataSource(this.DTPatients.IncomingMessagePatients);
    patientselection = new SelectionModel<IIncomingMessagePatient>(false, []);
    pageSizeOptions: number[] = [5,10, 20, 30];
    nopatientRecordsMessage: string = "";
    itemSelected: boolean = false;
    DTPatient: IIncomingMessagePatient = {};
    loadingData: boolean = false;

    referrerdisplayedColumns = ['Name', 'Email', 'Action'];
    referrerlist: IReferrerList = { PageSize: 5, MaxPageSize: 7 };
    referrerDataSource: MatTableDataSource<IReferrer> = new MatTableDataSource(this.referrerlist.rehabReferrers);
    noreferrerRecordsMessage: string = "";
    responsereferrerlist: IReferrer[] = [];


    @ViewChild(MatPaginator, null) paginator: MatPaginator;
    @ViewChild(MatSort, null) sort: MatSort;
   
    @ViewChild(MatSort, { static: true }) personalizeSort: MatSort;
    @ViewChild("alloDataForm", null) alloDataForm: NgForm;

    patientselectedDetails: IAcceptPatient = {};
    constructor(public dialogRef: MatDialogRef<PatientDialog>,
        private _referrerservice: ReferralService, private _navigate: Router,
        private modalDialog: MatDialog, private _sharedService: SharedService,
        @Inject(MAT_DIALOG_DATA) public data?: any) {

        this.patientselectedDetails = this.data.patientData;
    }

    acceptDetails() {
        this.loadingData = true;
       
        //this._referrerservice.AcceptPatient(this.patientselectedDetails).subscribe(
        //    response => {
        //        this.loadingData = false;
        //        this.closeDialog();
        //        ModalStaticClass.show(this.modalDialog, "", "Success", "Details processed successfully.", 0, false, 1, "500px", 0);
        //    },
        //    err => {
        //        this.loadingData = false;
        //        this.closeDialog();
        //        ModalStaticClass.show(this.modalDialog, "", "Error", "Unable to accept / Reject patient, please contact administrator.", 0, false, 1, "500px", 1);
        //    });
       
        this._referrerservice.GetRehabReferrerList(this.patientselectedDetails).subscribe(
            response => {
                this.loadingData = false;
                this.responsereferrerlist = <IReferrer[]>response;
                if (this.responsereferrerlist != null) {

                    this.referrerlist.rehabReferrers = <IReferrer[]>this.responsereferrerlist;
                    this.referrerlist.TotalRecords = this.referrerlist.rehabReferrers.length || 0;
                    this.referrerlist.TotalPages = Math.ceil(this.referrerlist.TotalRecords / this.referrerlist.PageSize);
                    this.referrerlist.CurrentPage = 0;
                    this.referrerDataSource = new MatTableDataSource(this.referrerlist.rehabReferrers.slice(0, this.referrerlist.PageSize));

                    
                   
                    const dialogRef = this.modalDialog.open(ReferrerDialog, {
                        //width: '1070px',
                        height: '500px',
                        maxWidth: '350vw',
                        width: '950px',
                        panelClass: 'referrer-dialog-container',
                        disableClose: true,
                        data: {
                            referrerlist: this.referrerlist,
                            referrerDataSource: this.referrerDataSource,
                            patient: this.patientselectedDetails
                            
                        }
                    });

                    dialogRef.afterClosed().subscribe(
                        result => {
                            this.closeDialog();
                            
                        })

                    //setTimeout(() => this.gotoNextStepTemp(), 500);
                }
                else {
                    this.loadingData = false;
                    ModalStaticClass.show(this.modalDialog, "", "Error", "No referrer Data exists", 0, false, 1, "500px", 1);

                }
            },
            err => {
                this.loadingData = false;
                ModalStaticClass.show(this.modalDialog, "", "Error", "Unable to accept / Reject patient, please contact administrator.", 0, false, 1, "500px", 1);
            });
        
    }
    rejectDetails() {
        
        ModalStaticClass.show(this.modalDialog, "", "Confirm", "Are you sure?", 2, false, 0, "500px", 3)
            .subscribe(res => {
                if (res.result=='yes') {
                    this.loadingData = true;
                    this._referrerservice.RejectPatient(this.patientselectedDetails).subscribe(
                        res => {
                            this.loadingData = false;
                            this.closeDialog();
                            var response = <IResponseEntity>res;
                            if (response.ErrorCode == "200") {
                                this.loadingData = false;
                                ModalStaticClass.show(this.modalDialog, "", "Success", response.ErrorCode + " : " + response.ErrorMessage, 0, false, 1, "500px", 0);
                                
                            }
                            else {
                                ModalStaticClass.show(this.modalDialog, "", "Error", "502 :  Patient rejection could not be processed sucessfully. Please contact IT support.", 0, false, 1, "500px", 0);
                              
                            }

                        },
                        err => {
                            this.loadingData = false;
                            this.closeDialog();
                            ModalStaticClass.show(this.modalDialog, "", "Error", "Unable to accept / Reject patient, please contact administrator.", 0, false, 1, "500px", 1);
                        });
                }
            });
 
       
    }
    redirectMainPage() {
        this._navigate.navigateByUrl("/referrer/incomingmessage");

        
    }
    ngOnInit() {

    }
    closeDialog() {
        this.dialogRef.close();
        this.redirectMainPage();
    }
    closeModal() {
        this.dialogRef.close();
       
    }

}

/*This is Referrer List*/
@Component({
    selector: 'referrer-dialog',
    templateUrl: 'referrer-dialog.component.html',
})
export class ReferrerDialog implements OnInit {
    referrerdisplayedColumns = ['Option','Name', 'Email','NPINumber','Address','Phone'];
    referrerlist: IReferrerList = { PageSize: 5, MaxPageSize: 5 };

    referrerDataSource: MatTableDataSource<IReferrer> = new MatTableDataSource(this.referrerlist.rehabReferrers);
    
    pageSizeOptions: number[] = [5];
    noreferrerRecordsMessage: string = "";    
    patient: IAcceptPatient = {};
    loadingData: boolean = false;
    selectedReferrer: number = 0;

    @ViewChild(MatPaginator, null) paginator: MatPaginator;
    @ViewChild(MatSort, null) sort: MatSort;

    @ViewChild(MatSort, { static: true }) personalizeSort: MatSort;
    @ViewChild("alloDataForm", null) alloDataForm: NgForm;

    patientselectedDetails: IAcceptPatient = {};
    constructor(public dialogRef: MatDialogRef<ReferrerDialog>,
        private _referrerservice: ReferralService, private _navigate: Router,
        private modalDialog: MatDialog, private _sharedService: SharedService,
        @Inject(MAT_DIALOG_DATA) public data?: any) {

        this.referrerDataSource = this.data.referrerDataSource;
        this.referrerlist = this.data.referrerlist;
        this.patient = this.data.patient;
       
        if (this.referrerlist.rehabReferrers.length <= 0) {
            this.noreferrerRecordsMessage = "No records found.";
        }
        else {
            this.noreferrerRecordsMessage = "";
        }
    }

    acceptDetails(eventID:any) {
        this.loadingData = true;
        if (eventID == 1) {
            this.patient.ReferrerID = this.selectedReferrer; // Existing referrer
        }
        else {
            this.patient.ReferrerID = eventID; // new referrer
        }
        
       
        if (this.patient.ReferrerID != undefined && this.patient.ReferrerID != null) {
            this._referrerservice.CreatePatient(this.patient).subscribe(
                res => {
                    this.closeDialog();
                    this.loadingData = false;
                    var response = <IResponseEntity>res;
                    if (response.ErrorCode == "200") {
                        
                        ModalStaticClass.show(this.modalDialog, "", "Success", response.ErrorCode + " : " + response.ErrorMessage, 0, false, 1, "500px", 0);
                        this.redirectMainPage();
                    }
                    else if (response.ErrorCode == "404") {
                        ModalStaticClass.show(this.modalDialog, "", "Error", response.ErrorCode + " : " + response.ErrorMessage, 0, false, 1, "500px", 0);
                       // this.redirectMainPage();
                    }
                    else {
                        ModalStaticClass.show(this.modalDialog, "", "Error", "502 : Patient referral could not be processed sucessfully. Please contact IT support.", 0, false, 1, "500px", 0);
                    }
                  
                },
                err => {
                    this.loadingData = false;
                    this.closeDialog();
                    ModalStaticClass.show(this.modalDialog, "", "Error", "Unable to accept / Reject patient, please contact administrator.", 0, false, 1, "500px", 1);
                });
        }
        else {
            ModalStaticClass.show(this.modalDialog, "", "Error", "please select referrer.", 0, false, 1, "500px", 1);
        }
    }
    getReferrerPaginationData(pageEvent: any) {
        if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.referrerlist.CurrentPage = pageEvent.pageIndex;
            this.referrerlist.PageSize = pageEvent.pageSize;
            this.referrerDataSource.data = this.referrerlist.rehabReferrers.slice((this.referrerlist.CurrentPage * this.referrerlist.PageSize), (((this.referrerlist.CurrentPage + 1) * this.referrerlist.PageSize) + 1));
            this.referrerDataSource.sort = this.sort;
        }
        else {
            this.referrerDataSource.data = this.referrerlist.rehabReferrers.slice(0, pageEvent.pageSize);
            this.referrerDataSource.sort = this.sort;
        }
    }
    redirectMainPage() {
        this._navigate.navigateByUrl("/referrer/incomingmessage");
    }
    ngOnInit() {

    }
    closeDialog() {
        this.dialogRef.close();
        this.redirectMainPage();
    }
    closeModal() {
        this.dialogRef.close();

    }

}
