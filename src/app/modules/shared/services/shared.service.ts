import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { IDropdown, iExcelParams, iApproveRejectADJToREGNotification } from '../interfaces/icommon';
import { map } from 'rxjs/operators';
//import { iBasicFilter } from '../../shared/interfaces/ifilter';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    constructor(public _apiService: ApiService) {

    }

    supportTeamSubject = new BehaviorSubject<string>("");

    editsupportTeam(newValue: string) {
        this.supportTeamSubject.next(newValue);
    }    

    getFiscalYear(tNumber: string): Observable<any> {
        return this._apiService.getDataWithParams("FDDBuyer/FiscalYear", {
            tNumber: tNumber
        });
    }

    getSpendPoolHigh(tNumber: string): Observable<any> {
        return this._apiService.getDataWithParams("FDDBuyer/SpendPoolHigh", {
            tNumber: tNumber
        });
    }

    getSubRegion(): Observable<any> {
        return this._apiService.getData("FDDBuyer/SubRegion");
    }

    getProbability(): Observable<any> {
        return this._apiService.getData("FDDBuyer/Probability");
    }

    getPurchasingGroup(): Observable<any> {
        return this._apiService.getData("FDDBuyer/PurchaseGroup");
    }

    getBackupBuyer(): Observable<any> {
        return this._apiService.getData("FDDBuyer/BackUpBuyer");
    }

    getSpendPoolHighMediumLow(): Observable<any> {
        return this._apiService.getData("FDDBuyer/SpendPoolHighMediumLow");
    }

    getSpendPoolMediumById(sphID: string): Observable<IDropdown[]> {
        return this._apiService.getDataWithParams("FDDBuyer/SpendPoolMediumByID", {
            SPH: sphID
        });
    }

    getAllSpendPoolMediums(): Observable<IDropdown[]> {
        return this._apiService.getData("FDDBuyer/AllSpendPoolMediums");
    }

    getSpendPoolLowById(spmId: string): Observable<IDropdown[]> {
        return this._apiService.getDataWithParams("FDDBuyer/SpendPoolLowByID", {
            SPM: spmId
        });
    }
    getPlantById(rgnId: string): Observable<IDropdown[]> {
        return this._apiService.getDataWithParams("Support/PlantByID", {
            regionId: rgnId
        });
    }
    uploadAttachment(fileData: File, param: iExcelParams) {

        var formData = new FormData();
        formData.append('file', fileData);
        return this._apiService.postFile("FDDBuyer/UploadProjectAttachment", formData, param);
    }
    DownloadProjectTemplate(param: any) {
        var role = param.role;
        return this._apiService.getBlobwithParameter("FDDBuyer/DownloadProjectTemplate?SpendPoolHighID=" + param.SpendPoolHighID, role);
    }

    //uncomment this for multiple attachments
    //uploadMultipleAttachment(assessmentId, attachmentKey, fileData: File[]) {

    //    var formData = new FormData();
    //    for (var i = 0; i < fileData.length; i++) {
    //        formData.append('file' + i, fileData[i]);
    //    }
    //    return this._apiService.postData("Common/UploadMultipleAttachment", formData);
    //}

    downloadResponse(resp, fileName) {
        let ieEDGE = navigator.userAgent.match(/Edge/g);
        let ie = navigator.userAgent.match(/.NET/g); // IE 11+
        let oldIE = navigator.userAgent.match(/MSIE/g);
        //let fileName: string = attachmentDetails.AttachmentName;
        if (ie || oldIE || ieEDGE) {
            window.navigator.msSaveOrOpenBlob(resp, fileName);
        }
        else {
            var url = window.URL.createObjectURL(resp);
            var a = document.createElement('a');
            document.body.appendChild(a);
            a.setAttribute('style', 'display: none');
            a.href = url;
            a.download = fileName;
            a.click();
            window.URL.revokeObjectURL(url);
            a.remove(); // remove the element
        }
    }

    approveRejectADJToREGProject(approveRejectADJToREGProject: iApproveRejectADJToREGNotification): Observable<boolean> {
        return this._apiService.postData("Common/ApproveRejectADJToREGProject", approveRejectADJToREGProject);
    }

    downloadTemplate(templateKey: string) {
        return this._apiService.downloadTemplate(templateKey, 'Common/DownloadTemplate').pipe(map(resp => {
            let attachmentData = {
                FileData: resp.body,
                FileName: resp.headers.get('x-fileName')
            }
            this.downloadResponse(attachmentData.FileData, attachmentData.FileName);
        }));
    }
    getCategoryBySubsector(subsector: string): Observable<IDropdown[]> {
        return this._apiService.getDataWithParams("FDDBuyer/CategoryBySubsector", {
            subsector: subsector
        });
    }
    getGetProfitCenter(CCPC: string): Observable<string> {
        return this._apiService.getDataWithParams("Support/ProfitCenter", {
            CCPC: CCPC
        });
    }

    getSupportTeam() {
        return this._apiService.getData("Common/SupportTeam");
    }

}
