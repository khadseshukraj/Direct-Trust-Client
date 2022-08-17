import * as CryptoJS from 'crypto-js';
import { Injectable } from '@angular/core';
//import { plainText } from '@amcharts/amcharts4/.internal/core/utils/Utils';

@Injectable()
export class StorageHelper {

    setItem(key, value) {
        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(value), key);
        sessionStorage.setItem(key, ciphertext);
    }

    getItem(key) {
        var ciphertext = sessionStorage.getItem(key);
        if (ciphertext != null) {
            var bytes = CryptoJS.AES.decrypt(ciphertext.toString(), key);
            var plaintext = bytes.toString(CryptoJS.enc.Utf8);
            if (plaintext == null || plaintext == "") {
                return plaintext;
            }
            return JSON.parse(plaintext);
        }
        else
            return null;
    }

    removeItem(key) {
        sessionStorage.removeItem(key);
    }
}
