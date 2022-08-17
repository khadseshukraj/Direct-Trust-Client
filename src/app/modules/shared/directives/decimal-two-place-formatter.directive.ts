import { Directive, ElementRef, HostListener } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Directive({
    selector: '[decimalTwoPlaceFormatter]'
})
export class DecimalTwoPlaceFormatterDirective {



    @HostListener("keypress", ["$event"]) onkeypress(event: KeyboardEvent) {
        var startPos = this.el.nativeElement.selectionStart;
        var endPos = this.el.nativeElement.selectionEnd;
        var keyupValue = '';
        if (startPos != endPos) {
            var result = this.el.nativeElement.value.split('');
            result.splice(startPos, endPos - startPos);
            result.splice(startPos, 0, String.fromCharCode(event.which));;
            keyupValue = result.join('');
        }
        else
        {
            var x = this.el.nativeElement.value.split('');
            x.splice(startPos, 0, String.fromCharCode(event.which));
            keyupValue = x.join('');
        }

        var regex = new RegExp("^(\-?(\\d{1,2}|\-?\\d{0,2}\\.\\d{0,2})?)$");
        if (!regex.test(keyupValue)) {
            event.preventDefault();
        }

        //var keyupValue = (this.el.nativeElement.value.insertAt(endPos, String.fromCharCode(event.which)));
        //var keyupValue = this.el.nativeElement.value.substr(0, endPos) + String.fromCharCode(event.which) + this.el.nativeElement.value.substr(endPos);

        //var keyupValue = this.el.nativeElement.value.substr(0, endPos) + String.fromCharCode(event.which) + this.el.nativeElement.value.substr(endPos);

        //var x = this.el.nativeElement.value.split('');
        //x.splice(startPos, 0, String.fromCharCode(event.which));
        //var keyupValue = x.join('');

        //var regex = new RegExp("^(\-?(\\d{1,3}|\-?\\d{0,3}\\.\\d{0,3})?)$");
        //if (!regex.test(keyupValue)) {
        //    event.preventDefault();
        //}
      
    }



    constructor(private el: ElementRef, private decimalPipe: DecimalPipe) {
    }

}
