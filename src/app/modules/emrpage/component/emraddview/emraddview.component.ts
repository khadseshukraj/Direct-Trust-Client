import { Component, OnInit, ViewChild, Inject, ViewEncapsulation } from '@angular/core';
import { ApplicationHeaderService } from 'src/app/layout/services/application-header.service';
import { StorageHelper } from 'src/app/core/services/storage-helper.service';
import { SidebarService } from 'src/app/layout/services/sidebar.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ModalStaticClass } from '../../../shared/components/modal/ModalStaticClass';
import { SharedService } from 'src/app/modules/shared/services/shared.service';
import {MatPaginator} from '@angular/material';
import { ReferralService } from 'src/app/modules/emrpage/services/referral.service';
import { IDirectTrustReferrers, IDirectTrustReferrer, IDirectTrustReferrerDelete } from 'src/app/modules/emrpage/Interface/iadmin';
import { NgForm, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-emraddview',
  templateUrl: './emraddview.component.html',
  styleUrls: ['./emraddview.component.scss']
})
export class EMRaddviewComponent implements OnInit {
  displayedColumns = ['Institute_Name','Edit'];
    DTReferrers: IDirectTrustReferrers = { PageSize: 20, MaxPageSize: 30 };
    referrerDetail: IDirectTrustReferrer = {};
    referrerDetails: IDirectTrustReferrer[] = [];

    referrerDetaildelete: IDirectTrustReferrerDelete = {};
    noRecordsMessage: string = "";
  angularDataSource: MatTableDataSource<IDirectTrustReferrer> = new MatTableDataSource(this.DTReferrers.DirectTrustReferrers);
  pageSizeOptions: number[] = [10, 20, 30];
    loadingData: boolean = false;

  @ViewChild(MatPaginator,null) paginator: MatPaginator;
    @ViewChild(MatSort, null) sort: MatSort;
    

  constructor(private _headerService: ApplicationHeaderService, private _storageHelper: StorageHelper, private _sidebarService: SidebarService,private modalDialog: MatDialog,private _referrerservice: ReferralService) { 
    //this.dataSource.paginator = this.paginator;
    //this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    //this._referrerservice.getReferrerList().subscribe(
    //    response => {
    //      this.dataSource = new MatTableDataSource(response);
    //    });
  }

  ngOnInit() {

    this._sidebarService.setActiveState("referrer");
      this._sidebarService.editSidebarShowValue(true);
      this.getReferrerList();
  }
    getReferrerList() {
        this.loadingData = true;
        this._referrerservice.getReferrerList().subscribe(
            res => {
                this.DTReferrers.DirectTrustReferrers = <IDirectTrustReferrer[]>res;
                this.loadingData = false;
                this.DTReferrers.TotalRecords = this.DTReferrers.DirectTrustReferrers.length || 0;
                this.DTReferrers.TotalPages = Math.ceil(this.DTReferrers.TotalRecords / this.DTReferrers.PageSize);
                this.DTReferrers.CurrentPage = 0;
                this.angularDataSource = new MatTableDataSource(this.DTReferrers.DirectTrustReferrers.slice(0, this.DTReferrers.PageSize));
                if (this.DTReferrers.DirectTrustReferrers.length <= 0) {
                    this.noRecordsMessage = "No records found.";
                }
                else {
                    this.noRecordsMessage = "";
                }

                },
                err => {  });
        
    }
    //Paginator
    getPaginationData(pageEvent: any) {
        if (pageEvent.pageIndex != pageEvent.previousPageIndex) {
            //this.figDetail_Param.TNumber = this.loggedInUserDetails.TNumber;
            this.DTReferrers.CurrentPage = pageEvent.pageIndex;
            this.DTReferrers.PageSize = pageEvent.pageSize;
            this.angularDataSource.data = this.DTReferrers.DirectTrustReferrers.slice((this.DTReferrers.CurrentPage * this.DTReferrers.PageSize), (((this.DTReferrers.CurrentPage + 1) * this.DTReferrers.PageSize) + 1));
            this.angularDataSource.sort = this.sort;
        }
        else {
            this.angularDataSource.data = this.DTReferrers.DirectTrustReferrers.slice(0, pageEvent.pageSize);
            this.angularDataSource.sort = this.sort;
        }
    }
  ngAfterViewInit() {
    
  }
    
    OpenCreateReferrerModal() {
        this.referrerDetails = [];
        this.referrerDetail = {};
        this.referrerDetails.push(this.referrerDetail);
        const dialogRef = this.modalDialog.open(PersonalizationDialog, {
            width: '1100px',
            height: '450px',
            panelClass: 'referrer-dialog-container',
            disableClose: true,
            data: {
                referrerDetails: this.referrerDetails
            }
        });

        dialogRef.afterClosed().subscribe(
            result => {
                this.getReferrerList();
            })
    }

    getReferrerDetail(instituteid:any) {
    //this.loadingData = true;
        this._referrerservice.getReferrerDetail(instituteid).subscribe(
          response => {
              this.referrerDetails = response;
    //         this.loadingData = false;
            const dialogRef = this.modalDialog.open(PersonalizationDialog, {
                width: '1100px',
                height: '450px',
                panelClass: 'referrer-dialog-container',
                disableClose: true,
                data: {
                    referrerDetails: this.referrerDetails 
                }
            });

            dialogRef.afterClosed().subscribe(
                result => {
                    //if (result && result.result != null && result.result.length > 0) {
                    //    this.displayedColumns = result.result;
                    //}
                    this.getReferrerList();
                })
         })
    }
    deleteDetails(instituteid: any, RefEmailID:any) {
        this.referrerDetaildelete.RefEmailID = RefEmailID;
        this.referrerDetaildelete.RefID = instituteid;
        ModalStaticClass.show(this.modalDialog, "", "Delete Referrer",
            "This action will Delete Referrer. Please confirm", 1, false, 1, "400px")
            .subscribe(res => {
                if (res) {
                    this.loadingData = true;
                    this._referrerservice.deleteReferrerDetails(this.referrerDetaildelete).subscribe(
                        response => {
                            this.loadingData = false;

                            ModalStaticClass.show(this.modalDialog, "", "Success", "Details Deleted successfully.", 0, false, 1, "500px", 0);
                            this.getReferrerList();
                        }
                    )
                }
            });
    }
}

@Component({
  selector: 'referrer-dialog',
  templateUrl: 'admin-dialog.component.html',
})
export class PersonalizationDialog implements OnInit {
  // dataSource: MatTableDataSource<IPersonalizationDetails>;
  displayedColumns: string[] = ['Select', 'ColumnName'];
    loadingData: boolean = false;
    defaultValues: IDirectTrustReferrer[] = [];
    DTReferrers: IDirectTrustReferrers = { PageSize: 20, MaxPageSize: 30 };
    referrerDetails: IDirectTrustReferrer[] = [];
    referrerDetail: IDirectTrustReferrer = {};
    referrerDetaildelete: IDirectTrustReferrerDelete = {};

    angularDataSource: MatTableDataSource<IDirectTrustReferrer> = new MatTableDataSource(this.DTReferrers.DirectTrustReferrers);
    
  selectedSpendPoolHigh: string = "";
  @ViewChild(MatSort, { static: true }) personalizeSort: MatSort;
    @ViewChild("alloDataForm", null) alloDataForm: NgForm;
  constructor(public dialogRef: MatDialogRef<PersonalizationDialog>, 
      private _referrerservice: ReferralService,
     private modalDialog: MatDialog, private _sharedService: SharedService,
      @Inject(MAT_DIALOG_DATA) public data?: any) {

      this.referrerDetail = {};

      this.referrerDetails.push(this.referrerDetail);
      this.defaultValues = this.data.referrerDetails;
  }

  closeDialog() {
      this.dialogRef.close();
  }
    getReferrerList() {
        this.loadingData = true;
        this._referrerservice.getReferrerList().subscribe(
            res => {
                this.DTReferrers.DirectTrustReferrers = <IDirectTrustReferrer[]>res;
                this.loadingData = false;
                this.DTReferrers.TotalRecords = this.DTReferrers.DirectTrustReferrers.length || 0;
                this.DTReferrers.TotalPages = Math.ceil(this.DTReferrers.TotalRecords / this.DTReferrers.PageSize);
                this.DTReferrers.CurrentPage = 0;
                this.angularDataSource = new MatTableDataSource(this.DTReferrers.DirectTrustReferrers.slice(0, this.DTReferrers.PageSize));

            },
            err => { });

    }
    AddRowReferrerModal() {
        this.referrerDetail = {};

        this.defaultValues.push(this.referrerDetail);
        //this.data.referrerDetails = this.referrerDetails;
        this.defaultValues = this.defaultValues;
    }
    DeleteRowReferrerModal(index: any) {
       this.defaultValues.splice(index,1);

    }
  saveDetails() {
      this.loadingData = true;
      // var detailsToBeSent: IPersonalization = { TNumber: this.data.personalizationDetails.TNumber, PersonalizationDetails: this.dataSource.data }
      if (this.alloDataForm.valid) {


          this._referrerservice.saveReferrerDetails(this.defaultValues).subscribe(
              response => {
                  this.loadingData = false;

                  ModalStaticClass.show(this.modalDialog, "", "Success", "Details saved successfully.", 0, false, 1, "500px", 0);
                  this.dialogRef.close();
                  this.getReferrerList();
              }
          )
      }
      else {
          this.loadingData = false;
      }
  }
    updateDetails() {
        if (this.alloDataForm.valid) {
            this.loadingData = true;
            // var detailsToBeSent: IPersonalization = { TNumber: this.data.personalizationDetails.TNumber, PersonalizationDetails: this.dataSource.data }
            this._referrerservice.updateReferrerDetails(this.defaultValues).subscribe(
                response => {
                    this.loadingData = false;

                    ModalStaticClass.show(this.modalDialog, "", "Success", "Details saved successfully.", 0, false, 1, "500px", 0);
                    this.dialogRef.close();
                    this.getReferrerList();
                }
            )
        }
        else {
            this.loadingData = false;
        }
    }
    
    

  resetDetails() {
    //  this.data.personalizationDetails.PersonalizationDetails = JSON.parse(JSON.stringify(this.defaultValues.PersonalizationDetails));
     
  }

 
 
  

  ngOnInit() {
      // this.dataSource.sort = this.personalizeSort;
      // this._sharedService.getSpendPoolHigh(this.defaultValues.TNumber).subscribe(
      //     response => {
      //         this.spendPoolHighList = <IDropdown[]>response;
      //         this.selectedSpendPoolHigh = this.spendPoolHighList.filter(x => { return x.selected == true })[0].ID;
      //     }
      // )
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];