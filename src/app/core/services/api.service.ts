import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../modules/shared/interfaces/icommon';
import { HttpParams } from '@angular/common/http';
//import appConfig from '../../../assets/appConfig.json';
import { ConfigService } from './config';
@Injectable()
export class ApiService {
    baseApiURI: string;
    config: any;
    constructor(private _ConfigService: ConfigService,private http: HttpClient) {
       
        //this.baseApiURI = 'http://localhost:60408/';
       // this.baseApiURI = appConfig.APIURL;
        this.config = _ConfigService.loadJSON('./assets/config.json');
        this.baseApiURI = this.config.APIURL;
        // this.baseApiURI = 'http://137.185.233.4:6383/api/';
       
    }

    getData(url: string): Observable<any> {
        return new Observable<any>(observer => {
            this.http.get(this.baseApiURI + url)
                .subscribe((resp: ApiResponse) => {
                    this.resolveApiData(resp);
                    if (resp != null) {
                        observer.next(resp);
                    }
                    else {
                        observer.next(undefined);
                        observer.complete();
                    }
                }, (error: any) => {
                    observer.next(undefined);
                    console.log(error);
                });
        });
    }

    getBlob(url: string, parameter: any) {
        return this.http.post(this.baseApiURI + url, parameter, {
            observe: 'response',
            responseType: 'blob',
        });
    }
    RunPriceResponse(url: string, version: string) {
        return this.http.get(this.baseApiURI + url, {
            responseType: 'blob', observe: 'response',
            params: {
                version: version
            }
        })
    }

    getBlobWithParams(url: string, parameter: any, httpParams: HttpParams) {
        return this.http.post(this.baseApiURI + url, parameter, {
            observe: 'response',
            responseType: 'blob',
            params: httpParams
        });
    }
    getFile(url: string): Observable<HttpResponse<Blob>> {
        return <any>this.http.post(this.baseApiURI + url, {
            observe: 'response',
            responseType: 'blob',
        });
    }
    getBlobwithParameter(url: string, parameter: any) {
        let params = new HttpParams();
        params = params.append('Role', parameter);
        return this.http.post(this.baseApiURI + url, parameter, {
            observe: 'response',
            responseType: 'blob',
            params: params,
        });
    }
    getDataWithParams(url: string, params: any): Observable<any> {
        return new Observable<any>(observer => {
            this.http.get(this.baseApiURI + url, {
                params: params
            })
                .subscribe((resp: ApiResponse) => {
                    this.resolveApiData(resp);
                    if (resp != null) {
                        observer.next(resp);
                    }
                    else {
                        observer.next(undefined);
                        observer.complete();
                    }
                }, (error: any) => {
                    observer.next(undefined);
                    console.log(error);
                });
        });
    }

    postData(url: string, model: any): Observable<any> {
        return new Observable<any>(observer => {
            this.http.post(this.baseApiURI + url, model)
                .subscribe((resp: ApiResponse) => {
                    this.resolveApiData(resp);
                    if (resp != null) {
                        observer.next(resp);
                    }
                    else {
                        observer.next(undefined);
                        observer.complete();
                    }
                }, (error: any) => {
                    observer.next(undefined);
                    console.log(error);
                });
        });
    }
    postFile(url: string, model: any, param: any): Observable<any> {
        let params = new HttpParams();
        params = params.append('FiscalYear', param.FiscalYear);
        params = params.append('ForecastCycle', param.ForecastCycle);
        params = params.append('SpendPoolHighID', param.SpendPoolHighID);
        params = params.append('SpendPoolHighValue', param.SpendPoolHighValue);
        params = params.append('PurchasingGroupID', param.PurchasingGroupID);
        params = params.append('ProjectType', param.ProjectType);
        params = params.append('userrole', param.selectedRole);
        params = params.append('TNumber', param.TNumber);
        console.log(params);
        return this.http.post(this.baseApiURI + url, model, {
            observe: 'response',
            responseType: 'blob',
            params: params
        });

    }

    putData(url: string, model: any): Observable<any> {
        return new Observable<any>(observer => {
            this.http.put(this.baseApiURI + url, model)
                .subscribe((resp: ApiResponse) => {
                    this.resolveApiData(resp);
                    if (resp.Result != null) {
                        observer.next(resp.Result);
                    }
                    else {
                        observer.next(undefined);
                        observer.complete();
                    }
                }, (error: any) => { console.log(error); });
        });
    }

    deleteData(url: string): Observable<any> {
        return new Observable<any>(observer => {
            this.http.delete(this.baseApiURI + url)
                .subscribe((resp: ApiResponse) => {
                    this.resolveApiData(resp);
                    if (resp.Result != null) {
                        observer.next(resp.Result);
                    }
                    else {
                        observer.next(undefined);
                        observer.complete();
                    }
                }, (error: any) => { console.log(error); });

        });
    }
    postPricesourceFile(url: string, model: any, param: HttpParams): Observable<any> {

        return this.http.post(this.baseApiURI + url, model, {
            observe: 'response',
            responseType: 'blob',
            params: param
        });

    }
    postMasterDataFile(url: string, model: any, param: HttpParams): Observable<any> {

        return this.http.post(this.baseApiURI + url, model, {
            observe: 'response',
            responseType: 'blob',
            params: param
        });

    }
    private resolveApiData(response: ApiResponse): any {
       
    }

    downloadTemplate(templateKey: string, url: string) {
        return this.http.get(this.baseApiURI + url, {
            responseType: 'blob', observe: 'response',
            params: {
                templateKey: templateKey
            }
        })
    }
    postFIGVolumeFile(url: string, model: any, param: HttpParams): Observable<any> {

        return this.http.post(this.baseApiURI + url, model, {
            observe: 'response',
            responseType: 'blob',
            params: param
        });

    }


}
