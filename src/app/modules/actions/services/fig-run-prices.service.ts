import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { IFIGRunPricesDropdowns, IFigCycleYear } from '../../actions/interfaces/iaction-cards';
import { HttpParams } from '@angular/common/http';
@Injectable()
export class FIGRunPricesService {

    constructor(public _apiService: ApiService) { }
   
    runPricesJob(version: string): Observable<any> {
        //return this._apiService.getDataWithParams("FIG/RunPricesJob", {
        //    version: version,
        //})
        return this._apiService.RunPriceResponse("FIG/RunPricesJob", version);
    }
    getVersionFilterDetails(): Observable<IFigCycleYear> {
        //return this._apiService.getDataWithParams("FIGMasterData/GetVersionDropdown", {
        //    tNumber: tNumber,
        //    userRole: userRole
        //});
        return this._apiService.getData("FIG/GetVersionDropdown");
    }
}
