import { Component, OnInit } from '@angular/core';
import { IFIGRunPricesViewModel, IFIGRunPricesDropdowns, IFigCycleYear } from '../../interfaces/iaction-cards';
import { FIGRunPricesService } from '../../services/fig-run-prices.service';
import { StorageHelper } from 'src/app/core/services/storage-helper.service';
import { IUserDetails } from 'src/app/modules/shared/interfaces/icommon';
import { ModalStaticClass } from 'src/app/modules/shared/components/modal/ModalStaticClass';
import { MatDialog } from '@angular/material';
import { saveAs } from 'file-saver';

@Component({
    selector: 'app-fig-run-prices',
    templateUrl: './fig-run-prices.component.html',
    styleUrls: ['./fig-run-prices.component.scss']
})
export class FigRunPricesComponent implements OnInit {

    figRunPricesDetails: IFIGRunPricesViewModel = {};
    figRunPricesDropdowns: IFigCycleYear = {};
    userDetails: IUserDetails = {};
    selectedRole: string = "";
    loadingData: boolean = false;

    constructor(private _figrunpricesService: FIGRunPricesService, private _storageHelper: StorageHelper, private _modalDialog: MatDialog) {
        this.userDetails = this._storageHelper.getItem("loggedInUserDetails");
        this.selectedRole = this._storageHelper.getItem("selectedRole");
    }

    ngOnInit() {
        this.fillFIGRunPricesDropdowns();
    }

    fillFIGRunPricesDropdowns() {
        this.loadingData = true;
        this._figrunpricesService.getVersionFilterDetails().subscribe(
            (response: IFigCycleYear) => {
                if (response) {
                    this.figRunPricesDropdowns = response;
                    this.figRunPricesDetails.FigCycle = this.figRunPricesDropdowns[0].FigCycle;
                    //var selectedFigCycle = this.figRunPricesDropdowns.FigCycle.filter(x => x.selected);

                    //if (selectedFigCycle && selectedFigCycle.length == 1) {
                    //    this.figRunPricesDetails.FigCycle = selectedFigCycle[0].ID;
                    //}


                }
                else {
                    ModalStaticClass.show(this._modalDialog, "", "Error", "An error occured while fetching the FIG cycle details. Please try again after some time.", 0, false, 1, "400px");
                }
                this.loadingData = false;
            },
            (error: any) => {
                ModalStaticClass.show(this._modalDialog, "", "Error", "An error occured while fetching the FIG cycle details. Please try again after some time.", 0, false, 1, "400px");
                this.loadingData = false;
            });
    }

    executeButtonClicked() {
        let isValid: boolean = true;
        let errorMessage: string = "";

        if (this.figRunPricesDetails.FigCycle == null || this.figRunPricesDetails.FigCycle == undefined || this.figRunPricesDetails.FigCycle == "") {
            isValid = false;
            errorMessage = "Please select FIG Cycle.";
        }

        if (isValid) {
            this.runPricesButtonClicked();
        }
        else {
            ModalStaticClass.show(this._modalDialog, "", "Error", errorMessage, 0, false, 1, "400px");
        }
    }

    runPricesButtonClicked() {

        ModalStaticClass.show(this._modalDialog, "", "Run Prices",
            "This action will update all current Prices data from the system. Please confirm", 1, false, 1, "400px")
            .subscribe(res => {
                if (res) {
                    this.loadingData = true;
                    //this._figrunpricesService.runPricesJob(this.figRunPricesDetails.FigCycle).subscribe((resp: boolean) => {
                    //    if (resp) {
                    //        console.log(resp);
                    //        if (resp == true) {
                    //            ModalStaticClass.show(this._modalDialog, "", "Success", "Prices data updated successfully.", 0, false, 1, "400px").subscribe(response => {
                    //                if (response) {
                    //                   // this._navigate.navigateByUrl('/commodityImpact');
                    //                    this.loadingData = false;
                    //                }
                    //            });
                    //        }
                    //        else {
                    //            ModalStaticClass.show(this._modalDialog, "", "Error", "Unable to update the Prices data.", 0, false, 1, "400px");
                    //        }
                    //    }
                    //});

                   // this._navigate.navigateByUrl('commodityImpact');
                    this._figrunpricesService.runPricesJob(this.figRunPricesDetails.FigCycle).subscribe(
                        res => {
                            var contentType = res.headers.get('content-type');
                            var blob = new Blob([res.body], { type: contentType });
                            if (blob.size > 0) {
                                saveAs(blob, 'NoPriceSourceFileResponse.xlsx');
                                res;
                                this.loadingData = false;
                            }
                            else {
                                this.loadingData = false;

                                ModalStaticClass.show(this._modalDialog, "", "Success", "Prices data updated successfully.", 0, false, 1, "500px");
                            }
                        }, err => {
                            this.loadingData = false;
                            ModalStaticClass.show(this._modalDialog, "", "Error", "There was an error while updating the Price Source File.", 0, false, 1, "500px");
                        });
                    //this._navigate.navigateByUrl('commodityImpact');
                }
            });

    }

}
