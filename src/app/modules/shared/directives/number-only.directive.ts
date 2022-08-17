import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]' 
})
export class NumberOnlyDirective {

  @HostListener("keydown", ["$event"]) onkeydown(event: KeyboardEvent) {
    if ((47 < event.keyCode) && (event.keyCode < 58) || ((95 < event.keyCode) && (event.keyCode < 106)) || event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 9 || event.keyCode == 13) {
    }
    else {
      event.preventDefault();
    }
  }

  constructor(private el: ElementRef) { }

}
