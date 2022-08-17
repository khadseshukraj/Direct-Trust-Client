import { Component, OnInit, ViewChild, Inject, ViewEncapsulation, ElementRef, EventEmitter } from '@angular/core';
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
import {
    IDirectTrustReferrers, IDirectTrustReferrer, IDirectTrustReferrerDelete, IIncomingMessages,
    IIncomingMessage, CheckedMessages, IDTMessageSent, IDTMessageSentList, ISentMessageAttachment
} from 'src/app/modules/emrpage/Interface/iadmin';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { IUserDetails } from 'src/app/modules/shared/interfaces/icommon';
import { DatePipe } from '@angular/common';
import { Router, CanLoad, UrlSegment, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, RoutesRecognized } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';

import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith, filter, pairwise } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { saveAs } from 'file-saver'


@Component({
  selector: 'app-incomingmessage',
  templateUrl: './incomingmessage.component.html',
  styleUrls: ['./incomingmessage.component.scss']
})
export class IncomingmessageComponent implements OnInit {
    displayedColumns = ['checkBox', 'From', 'To', 'Received', 'Subject','Delete'];
    deleteddisplayedColumns = ['From', 'To', 'Received', 'Subject', 'Delete'];
    DTincomingMessages: IIncomingMessages = { PageSize: 20, MaxPageSize: 30 };
    DTdeletedincomingMessages: IIncomingMessages = { PageSize: 20, MaxPageSize: 30 };

    DTincomingMessage: IIncomingMessage = {};
    DTdeletedincomingMessage: IIncomingMessage = {};

    noRecordsMessage: string = "";
    noDeletedRecordsMessage: string = "";

    angularDataSource: MatTableDataSource<IIncomingMessage> = new MatTableDataSource(this.DTincomingMessages.IncomingMessages);
    deletedmessageangularDataSource: MatTableDataSource<IIncomingMessage> = new MatTableDataSource(this.DTdeletedincomingMessages.IncomingMessages);

    pageSizeOptions: number[] = [10, 20, 30];
    loadingData: boolean = false;
    loggedInUserDetails: IUserDetails = {};
    selection = new SelectionModel<IIncomingMessage>(false, []);
    sentselection = new SelectionModel<IDTMessageSent>(false, []);
    selectedMessage: any;
    selectedMessageID: any[] = [];
    checkedMessages: CheckedMessages = {};
    isMailDivVisible = false;
    isSentDivVisible = false;
    isDeletedDivVisible = false;
    isComposeDivVisible = false;

    visible = true;
    selectable = true;
    removable = true;
    separatorKeysCodes: number[] = [ENTER, COMMA];
    fruitCtrl = new FormControl();
    filteredmails: Observable<string[]>;
    mails: string[] = [];
    allmails: string[] = [];

    ccCtrl = new FormControl();
    filteredccmails: Observable<string[]>;
    ccmails: string[] = [];
    ccallmails: string[] = [];
    isEdit: boolean = false;


    DTMessageSentList: IDTMessageSentList = { PageSize: 20, MaxPageSize: 30 };
    DTMessageSent: IDTMessageSent = {};
    
    DTMessageSentAttachment: ISentMessageAttachment = {};
    DTMessageSentAttachmentlist: ISentMessageAttachment[] = [];
    
    sentdisplayedColumns = ['To', 'Received', 'Subject'];
    noSentRecordsMessage: string = "";
    angularDataSourceSentMessage: MatTableDataSource<IDTMessageSent> = new MatTableDataSource(this.DTMessageSentList.message);
    unReadMessageCount: any;


    @ViewChild('mailInput', null) mailInput: ElementRef<HTMLInputElement>;
    @ViewChild('ccmailInput', null) ccmailInput: ElementRef<HTMLInputElement>;
    @ViewChild('auto', null) matAutocomplete: MatAutocomplete;
    @ViewChild('ccauto', null) ccmatAutocomplete: MatAutocomplete;

    @ViewChild(MatPaginator, null) paginator: MatPaginator;
    @ViewChild(MatSort, null) sort: MatSort;

    constructor(private _headerService: ApplicationHeaderService, private _storageHelper: StorageHelper, private _sidebarService: SidebarService,
        private modalDialog: MatDialog, private _referrerservice: ReferralService, private _navigate: Router, 
        public datepipe: DatePipe) {
        this.filteredmails = this.fruitCtrl.valueChanges.pipe(
            startWith(null),
            map((fruit: string | null) => fruit ? this._filter(fruit) : this.allmails.slice()));

        this.filteredccmails = this.ccCtrl.valueChanges.pipe(
            startWith(null),
            map((cc: string | null) => cc ? this._ccfilter(cc) : this.ccallmails.slice()));

       
    }

    ngOnInit() {
        //this.previousUrl = this._previousrouteservice.getPreviousUrl();
        const { redirect } = window.history.state;
       
        console.log('state ' + redirect);
        this._sidebarService.setActiveState("incomingmessage");
        this._sidebarService.editSidebarShowValue(true);
        if (this._storageHelper.getItem("loggedInUserDetails") != null) {
            this.loggedInUserDetails = this._storageHelper.getItem("loggedInUserDetails");
        }
        this.getIncomingMessageList();
        this.getDeletedIncomingMessageList();
        this.getSentMessageList();
        this.getUserEmails();
       
        if (redirect!=undefined && redirect?.includes('readonly')) {
            
            this.openDiv("Deleted");
        }
        else {
            
            this.openDiv("Inbox");
        }
       
    }
    public uploader: FileUploader = new FileUploader({
       // url: URL,
        disableMultipart: false,
        autoUpload: true,
        method: 'post',
        itemAlias: 'attachment',
        allowedFileType: ['image', 'pdf', 'txt','xml','application']



    });

    getBase64(event) {
        let me = this;
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            //me.modelvalue = reader.result;
            console.log("selected file " +reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    public onFileSelected(event: EventEmitter<File[]>) {
        const file: File = event[0];
        //this.getBase64(event[0]);     
       this.DTMessageSent.Attachment = [];

        let fileCount: number = this.uploader.queue.length;
        if (fileCount > 0) {

            this.uploader.queue.forEach((val, i, array) => {
                
                let fileReader = new FileReader();
                fileReader.onloadend = (e) => {
                    let imageData = fileReader.result;
                    let rawData = imageData.toString().split("base64,");
                    let j = 0;
                    if (rawData.length > 1 && j==0) {
                        j = j + 1;
                        this.DTMessageSentAttachment.FileData = rawData[1];
                        this.DTMessageSentAttachment.FileName = val.file.name;
                       
                        this.DTMessageSent.Attachment.push(this.DTMessageSentAttachment);
                        this.DTMessageSentAttachment = {};

                    }
                }
                //if (this.DTMessageSentAttachment && (Object.keys(this.DTMessageSentAttachment).length != 0)) {
                //    this.DTMessageSent.Attachment.push(this.DTMessageSentAttachment);
                //}
                fileReader.readAsDataURL(val._file);

            });

            
            
        }
        else {
            this.DTMessageSent.Attachment = [];
        }
    }

    getIncomingMessageList() {
        this.loadingData = true;
        console.log(this.loggedInUserDetails);
        this._referrerservice.getIncomingMessageList(this.loggedInUserDetails.EmailId, this.loggedInUserDetails.Roles).subscribe(
            res => {
                this.DTincomingMessages.IncomingMessages = <IIncomingMessage[]>res;
                this.DTincomingMessages.IncomingMessages.forEach(x => {
                    x.Received = new Date(this.datepipe.transform(x.Received, 'yyyy/MM/dd'));
                    return x;
                });

                this.loadingData = false;
                this.DTincomingMessages.TotalRecords = this.DTincomingMessages.IncomingMessages.length || 0;
                this.DTincomingMessages.TotalPages = Math.ceil(this.DTincomingMessages.TotalRecords / this.DTincomingMessages.PageSize);
                this.DTincomingMessages.CurrentPage = 0;
                this.angularDataSource = new MatTableDataSource(this.DTincomingMessages.IncomingMessages.slice(0, this.DTincomingMessages.PageSize));
                this.selection = new SelectionModel<IIncomingMessage>(false, []);
                if (this.DTincomingMessages.IncomingMessages.length <= 0) {
                    this.noRecordsMessage = "No records found.";
                }
                else {
                    this.noRecordsMessage = "";
                }
                this.unReadMessageCount = this.DTincomingMessages.IncomingMessages.filter(x => x.IsRead == false || x.IsRead == null).length;
            },
            err => { });

    }
    getDeletedIncomingMessageList() {
        this.loadingData = true;
        console.log(this.loggedInUserDetails);
        this._referrerservice.getDeletedIncomingMessageList(this.loggedInUserDetails.EmailId, this.loggedInUserDetails.Roles).subscribe(
            res => {
                this.DTdeletedincomingMessages.IncomingMessages = <IIncomingMessage[]>res;
                this.DTdeletedincomingMessages.IncomingMessages.forEach(x => {
                    x.Received = new Date(this.datepipe.transform(x.Received, 'yyyy/MM/dd'));
                    return x;
                });

                this.loadingData = false;
                this.DTdeletedincomingMessages.TotalRecords = this.DTdeletedincomingMessages.IncomingMessages.length || 0;
                this.DTdeletedincomingMessages.TotalPages = Math.ceil(this.DTdeletedincomingMessages.TotalRecords / this.DTdeletedincomingMessages.PageSize);
                this.DTdeletedincomingMessages.CurrentPage = 0;
                this.deletedmessageangularDataSource = new MatTableDataSource(this.DTdeletedincomingMessages.IncomingMessages.slice(0, this.DTdeletedincomingMessages.PageSize));
                this.selection = new SelectionModel<IIncomingMessage>(false, []);
                if (this.DTdeletedincomingMessages.IncomingMessages.length <= 0) {
                    this.noDeletedRecordsMessage = "No records found.";
                }
                else {
                    this.noDeletedRecordsMessage = "";
                }
               
            },
            err => { });

    }
    getSentMessageList() {
        this.loadingData = true;
        console.log(this.loggedInUserDetails);
        this._referrerservice.getUserEmailMessages(this.loggedInUserDetails.LoginName).subscribe(
            res => {
                this.DTMessageSentList.message = <IIncomingMessage[]>res;
                this.DTMessageSentList.message.forEach(x => {
                    x.Sent = new Date(this.datepipe.transform(x.Sent, 'yyyy/MM/dd'));
                    return x;
                });

                this.loadingData = false;
                this.DTMessageSentList.TotalRecords = this.DTMessageSentList.message.length || 0;
                this.DTMessageSentList.TotalPages = Math.ceil(this.DTMessageSentList.TotalRecords / this.DTMessageSentList.PageSize);
                this.DTMessageSentList.CurrentPage = 0;
                this.angularDataSourceSentMessage = new MatTableDataSource(this.DTMessageSentList.message.slice(0, this.DTMessageSentList.PageSize));
                this.sentselection = new SelectionModel<IDTMessageSent>(false, []);
                if (this.DTMessageSentList.message.length <= 0) {
                    this.noSentRecordsMessage = "No records found.";
                }
                else {
                    this.noSentRecordsMessage = "";
                }
            },
            err => { });

    }
    getUserEmails() {
        this.loadingData = true;
        console.log(this.loggedInUserDetails);
        this._referrerservice.getUserEmails().subscribe(
            res => {
                this.allmails = res;
                this.ccallmails = res;
                this.loadingData = false;
               
            },
            err => { });

    }
    clearComposeEmail() {
        this.DTMessageSent = {};
        this.mails = [];
        this.ccmails = [];
        this.isEdit = false;
        this.selectable = true; 
        this.removable = true;
        this.DTMessageSent.Attachment = []
        this.uploader  = new FileUploader({
            // url: URL,
            disableMultipart: false,
            autoUpload: true,
            method: 'post',
            itemAlias: 'attachment',
            allowedFileType: ['image', 'pdf', 'txt', 'xml', 'application']


        });
    }
    sendEmail() {
        console.log(this.uploader.queue);
        if (this.mails.length == 0) {
            ModalStaticClass.show(this.modalDialog, "", "Error", "Please select recepient ", 0, false, 1, "500px", 1);
        }
        else if (this.DTMessageSent.Subject == '' || this.DTMessageSent.Subject == undefined) {
            ModalStaticClass.show(this.modalDialog, "", "Error", "Please add subject ", 0, false, 1, "500px", 1);
        }
        else {
            this.loadingData = true;
            this.DTMessageSent.To = this.mails.join();
            this.DTMessageSent.Cc = this.ccmails.join();
            console.log("mail TO " + this.mails);
            this.DTMessageSent.From = this.loggedInUserDetails.LoginName;
            this._referrerservice.sendEmailMessage(this.DTMessageSent).subscribe(
                response => {
                    this.loadingData = false;

                    ModalStaticClass.show(this.modalDialog, "", "Success", "Sent successfully.", 0, false, 1, "500px", 0);
                    this.clearComposeEmail();
                    this.getSentMessageList();
                    this.openDiv("Inbox");

                },
                err => {
                    this.loadingData = false;

                    ModalStaticClass.show(this.modalDialog, "", "Error", "Unable to sent, please contact administrator.", 0, false, 1, "500px", 1);
                });
        }
    }
    //Paginator
    getPaginationData(pageEvent: any) {
        if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.DTincomingMessages.CurrentPage = pageEvent.pageIndex;
            this.DTincomingMessages.PageSize = pageEvent.pageSize;
            this.angularDataSource.data = this.DTincomingMessages.IncomingMessages.slice((this.DTincomingMessages.CurrentPage * this.DTincomingMessages.PageSize), (((this.DTincomingMessages.CurrentPage + 1) * this.DTincomingMessages.PageSize) + 1));
            this.angularDataSource.sort = this.sort;
        }
        else {
            this.angularDataSource.data = this.DTincomingMessages.IncomingMessages.slice(0, pageEvent.pageSize);
            this.angularDataSource.sort = this.sort;
        }
    }
    getDeletedMessagePaginationData(pageEvent: any) {
        if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.DTdeletedincomingMessages.CurrentPage = pageEvent.pageIndex;
            this.DTdeletedincomingMessages.PageSize = pageEvent.pageSize;
            this.deletedmessageangularDataSource.data = this.DTdeletedincomingMessages.IncomingMessages.slice((this.DTdeletedincomingMessages.CurrentPage * this.DTdeletedincomingMessages.PageSize), (((this.DTincomingMessages.CurrentPage + 1) * this.DTincomingMessages.PageSize) + 1));
            this.deletedmessageangularDataSource.sort = this.sort;
        }
        else {
            this.deletedmessageangularDataSource.data = this.DTdeletedincomingMessages.IncomingMessages.slice(0, pageEvent.pageSize);
            this.deletedmessageangularDataSource.sort = this.sort;
        }
    }

    getPaginationDataSentMessage(pageEvent: any) {
        if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.DTMessageSentList.CurrentPage = pageEvent.pageIndex;
            this.DTMessageSentList.PageSize = pageEvent.pageSize;
            this.angularDataSourceSentMessage.data = this.DTMessageSentList.message.slice((this.DTMessageSentList.CurrentPage * this.DTMessageSentList.PageSize), (((this.DTincomingMessages.CurrentPage + 1) * this.DTincomingMessages.PageSize) + 1));
            this.angularDataSourceSentMessage.sort = this.sort;
        }
        else {
            this.angularDataSourceSentMessage.data = this.DTMessageSentList.message.slice(0, pageEvent.pageSize);
            this.angularDataSourceSentMessage.sort = this.sort;
        }
    }
    ngAfterViewInit() {

    }
    getMessageDetail(row: any,action :any) {
        console.log('row' + row.IsRead);
        if (this.loggedInUserDetails.Roles.toLocaleLowerCase() == 'front desk' && action == 'edit') {
            this._navigate.navigate(['/referrer/incomingmessage/incomingmessagedetail/' + row.ID + '/edit'], { state: { redirect: this._navigate.url } });
        }
        else if (this.loggedInUserDetails.Roles.toLocaleLowerCase() == 'front desk' && action == 'readonly') {
            this._navigate.navigate(['/referrer/incomingmessage/incomingmessagedetail/' + row.ID + '/readonly'], { state: { redirect: this._navigate.url } });
        }
        
    }

    updateChecked(id: any, event: any) {
        {
            console.log("id and event" + id + ":" + event.target.checked);
            if (event.target.checked) {
                this.selectedMessageID.push(id);
            } else {
                const index = this.selectedMessageID.indexOf(id, 0);
                if (index > -1) {
                    this.selectedMessageID.splice(index, 1);
                }
               
            }
            //console.log('selected array' + this.selectedMessageID);
           
        }

    }

    UpdateReadUnReadMessage(operation: any) {
        if (this.selectedMessageID.length > 0) {
            this.checkedMessages.incomingmessageIds = this.selectedMessageID;
            this.checkedMessages.operation = operation;

            this.loadingData = true;
            this._referrerservice.UpdateReadUnReadMessage(this.checkedMessages).subscribe(
                response => {
                    this.loadingData = false;
                    console.log('IsReadFlag Updated');
                    

                    this.getIncomingMessageList();
                    ModalStaticClass.show(this.modalDialog, "", "Success", "Message Flag updated successfully.", 0, false, 1, "500px", 0);
                }, err => {
                    this.loadingData = false;
                    ModalStaticClass.show(this.modalDialog, "", "Error", "Unable to update Message Flag, please contact administrator.", 0, false, 1, "500px", 1);
                });
        }
        else {
            ModalStaticClass.show(this.modalDialog, "", "Error", "Please select Messages to Read / Unread.", 0, false, 1, "500px", 1);
        }
        this.selectedMessageID = [];
    }
    UpdateReadFlag(operation:any) {
        console.log('operation' + operation);
        console.log('selected ID' + this.selectedMessageID);
    }
    openDiv(cardName: any) {
        this.clearComposeEmail();
        if (cardName == "Inbox") {
            this.isMailDivVisible = true;
            this.isSentDivVisible = false;
            this.isComposeDivVisible = false;
            this.isDeletedDivVisible = false;
        }
        else if (cardName == "Sent") {
            this.isSentDivVisible = true;
            this.isMailDivVisible = false;
            this.isComposeDivVisible = false;
            this.isDeletedDivVisible = false;
        }
        else if (cardName == "Compose") {
            this.isSentDivVisible = false;
            this.isMailDivVisible = false;
            this.isComposeDivVisible = true;
            this.isDeletedDivVisible = false;
        }
        else if (cardName == "Deleted") {
            this.isSentDivVisible = false;
            this.isMailDivVisible = false;
            this.isComposeDivVisible = false;
            this.isDeletedDivVisible = true;
        }
        else {
            this.isMailDivVisible = true;
            this.isSentDivVisible = false;
            this.isComposeDivVisible = false;
            this.isDeletedDivVisible = false;
        }
    }
    CancelCompose() {
        if (this.isEdit) {
            this.isMailDivVisible = false;
            this.isSentDivVisible = true;
            this.isComposeDivVisible = false;
            this.isDeletedDivVisible = false;
            this.clearComposeEmail();
        }
        else {
            ModalStaticClass.show(this.modalDialog, "", "Confirm", "Are you sure, you want to discard this message?", 2, false, 0, "500px", 3)
                .subscribe(res => {
                    if (res.result == 'yes') {
                        this.isMailDivVisible = true;
                        this.isSentDivVisible = false;
                        this.isComposeDivVisible = false;
                        this.clearComposeEmail();
                    }
                });
        }
    }

    UpdateMessageInactive(id:any) {

        this.loadingData = true;
        this._referrerservice.UpdateMessageInactive(id).subscribe(
            response => {
                this.loadingData = false;
                this.getIncomingMessageList();
                this.getDeletedIncomingMessageList();
                ModalStaticClass.show(this.modalDialog, "", "Success", "Message Deleted successfully.", 0, false, 1, "500px", 0);
            }, err => {
                this.loadingData = false;
                ModalStaticClass.show(this.modalDialog, "", "Error", "Unable to Delete, please contact administrator.", 0, false, 1, "500px", 1);
            });
    }
    DeleteMessage(id:any) {
        this.loadingData = true;
        this._referrerservice.DeleteMessage(id).subscribe(
            response => {
                this.loadingData = false;
                ModalStaticClass.show(this.modalDialog, "", "Success", "Message Deleted successfully.", 0, false, 1, "500px", 0);
                this.getDeletedIncomingMessageList();
              
            }, err => {
                this.loadingData = false;
                ModalStaticClass.show(this.modalDialog, "", "Error", "Unable to Delete, please contact administrator.", 0, false, 1, "500px", 1);
            });
    }
/*Angular Email autocomplete*/
    add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        // Add our fruit
        if ((value || '').trim()) {
            this.mails.push(value.trim());
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }

        this.fruitCtrl.setValue(null);
    }

    remove(fruit: string): void {
        const index = this.mails.indexOf(fruit);

        if (index >= 0) {
            this.mails.splice(index, 1);
        }
    }

    selected(event: MatAutocompleteSelectedEvent): void {
        this.mails.push(event.option.viewValue);
        this.mailInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.allmails.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
    }

/* CC Mail list */
    addcc(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        // Add our fruit
        if ((value || '').trim()) {
            this.ccmails.push(value.trim());
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }

        this.ccCtrl.setValue(null);
    }

    removecc(fruit: string): void {
        const index = this.ccmails.indexOf(fruit);

        if (index >= 0) {
            this.ccmails.splice(index, 1);
        }
    }

    selectedcc(event: MatAutocompleteSelectedEvent): void {
        this.ccmails.push(event.option.viewValue);
        this.ccmailInput.nativeElement.value = '';
        this.ccCtrl.setValue(null);
    }
    private _ccfilter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.ccallmails.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
    }
    getSentMessageDetail(SentMessage: any) {
       // console.log(SentMessageID);
        this._referrerservice.getDirectTrustSentMessageByID(SentMessage.ID).subscribe(
            res => {
                this.clearComposeEmail();

                this.DTMessageSent = <IDTMessageSent>res;
                if (this.DTMessageSent == null || this.DTMessageSent == undefined) {
                    ModalStaticClass.show(this.modalDialog, "", "Error", "No record found.", 0, false, 1, "500px", 1);
                }
                else {
                    this.OpenSentMessage();
                }
                this.loadingData = false;

            },
            err => { this.loadingData = false; });

    }
    OpenSentMessage() {
        this.isSentDivVisible = false;
        this.isMailDivVisible = false;
        this.isComposeDivVisible = true;
        this.isDeletedDivVisible = false;
        this.isEdit = true;
        this.selectable = false;
        this.removable = false;
        this.mails = this.DTMessageSent.To.split(",");
        
    }
    downloadAttachment(attachment:any) {
        this.loadingData = true;

        this._referrerservice.DownloadMailAttachmentFile(attachment.ID).subscribe(
            res => {
                var contentType = res.headers.get('content-type');
                var blob = new Blob([res.body], { type: contentType });
                saveAs(blob, attachment.FileName);
                //var url = window.URL.createObjectURL(blob);
                //window.open(url);
                res;
                this.loadingData = false;

            }, err => {
                this.loadingData = false;

                ModalStaticClass.show(this.modalDialog, "", "Error", "There was an error while downloading the report.", 0, false, 1, "500px");
            });
    }

}



