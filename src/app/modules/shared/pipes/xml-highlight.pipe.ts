import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';



@Pipe({
  name: 'xmlSearch'
})

export class XMLHighlightPipe implements PipeTransform {
    constructor(public sanitizer: DomSanitizer) {

    }
    transform(text: string, search: string): SafeHtml {

        var pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        pattern = pattern.split(' ').filter((t) => {
            return t.length > 0;
        }).join('|');
        var regex = new RegExp(pattern, 'gi');
      //  return search ? text.replace(regex, (match) => `<mark>${match}</mark>`) : text;
        return this.sanitizer.bypassSecurityTrustHtml(
           text.replace(regex, (match) => `<mark>${match}</mark>`) 
        );

        //return this.sanitizer.bypassSecurityTrustHtml(text.replace(new RegExp(pattern, 'gi'), `<span class="highlight">${search}</span>`));

        //if (!search) {
        //    return text;
        //}
        //var pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        //pattern = pattern.split(' ').filter((t) => {
        //    return t.length > 0;
        //}).join('|');
        //// Match in a case insensitive maneer
        //const re = new RegExp(pattern, 'gi');
        //const match = text.match(re);

        //// If there's no match, just return the original value.
        //if (!match) {
        //    return text;
        //}

        //return this.sanitizer.bypassSecurityTrustHtml(text.replace(new RegExp(pattern, 'gi'), `<span class="highlight">${match[0]}</span>`));
    }
}
