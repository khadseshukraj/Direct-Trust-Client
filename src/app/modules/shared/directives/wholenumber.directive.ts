import { Directive, ElementRef, HostListener } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Directive({
    selector: '[appWholenumber]'
})
export class WholenumberDirective {
    constructor(private el: ElementRef, private decimalPipe: DecimalPipe) {
    }

    @HostListener("keyup", ["$event"]) onkeyup(event: KeyboardEvent) {
        if ((47 < event.keyCode) && (event.keyCode < 58) || ((95 < event.keyCode) && (event.keyCode < 106)) || event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 9) {
            this.el.nativeElement.value = this.decimalPipe.transform(this.el.nativeElement.value.replace(/[\,\.]/g, ''));
        }
        else if (event.keyCode == 109 || event.keyCode == 189) {
        }
        else {
            event.preventDefault();
        }
    }

    @HostListener("keydown", ["$event"]) onkeydown(event: KeyboardEvent) {
        if (this.el.nativeElement.value.replace(/[\,\.]/g, '').length >= 15) {
            if (event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 9) {

            }
            else {
                event.preventDefault();
            }
        }

        if ((47 < event.keyCode) && (event.keyCode < 58) || ((95 < event.keyCode) && (event.keyCode < 106)) || event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 9) {
        }
        else if (event.keyCode == 109 || event.keyCode == 189) {
            if (this.el.nativeElement.value.length == 0) { }
            else
                event.preventDefault();
        }
        else {
            event.preventDefault();
        }
    }


}
