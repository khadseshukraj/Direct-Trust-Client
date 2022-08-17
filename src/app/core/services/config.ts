import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class ConfigService {

    public config: any;
    constructor(private http: HttpClient) {
    }

    loadJSON(filePath) {
        const json = this.loadTextFileAjaxSync(filePath, "application/json");

        return JSON.parse(json);
    }

    loadTextFileAjaxSync(filePath, mimeType) {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", filePath, false);
        if (mimeType != null) {
            if (xmlhttp.overrideMimeType) {
                xmlhttp.overrideMimeType(mimeType);
            }
        }
        xmlhttp.send();
        if (xmlhttp.status == 200) {
            return xmlhttp.responseText;
        }
        else {
            return null;
        }
    }
}