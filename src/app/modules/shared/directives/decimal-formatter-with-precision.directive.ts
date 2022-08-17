import { Directive, ElementRef, HostListener } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Directive({
    selector: '[appDecimalFormatterWithPrecision]'
})
export class DecimalFormatterWithPrecisionDirective {

    constructor(private el: ElementRef, private decimalPipe: DecimalPipe) { }

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
        else {
            var x = this.el.nativeElement.value.split('');
            x.splice(startPos, 0, String.fromCharCode(event.which));
            keyupValue = x.join('');
        }

        var regex = new RegExp("^(\-?(\\d{1,3}|\-?\\d{0,6}\\.\\d{0,6})?)$");
        if (!regex.test(keyupValue)) {
            event.preventDefault();
        }
    }
}
