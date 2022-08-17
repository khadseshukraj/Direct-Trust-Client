import { Directive, ElementRef, HostListener,Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Directive({
    selector: '[decimalFormatterParam]'
})
export class DecimalFormatterParamDirective {
    @Input() predecimalplaces: string;
    @Input() postdecimalplaces: string;

    @HostListener("keypress", ["$event"]) onkeypress(event: KeyboardEvent) {

        console.log("pre" + this.predecimalplaces);
        console.log("post" + this.postdecimalplaces);

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
        var regxstr = "^(\-?(\\d{1," + this.predecimalplaces + "}|\-?\\d{0," + this.predecimalplaces + "}\\.\\d{0," + this.postdecimalplaces + "})?)$";

        var regex = new RegExp(regxstr);
        if (!regex.test(keyupValue)) {
            event.preventDefault();
        }
       
    }



    constructor(private el: ElementRef, private decimalPipe: DecimalPipe) {
    }

}
