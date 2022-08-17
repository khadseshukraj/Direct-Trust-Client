import { Directive, Input, SimpleChanges, Renderer2, ElementRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as vkbeautify from 'vkbeautify';
@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {
    @Input() searchedWords: string[];
    @Input() text: string;
    @Input() classToApply: string;

    constructor(private el: ElementRef, private renderer: Renderer2, public sanitizer: DomSanitizer) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (!this.searchedWords || !this.searchedWords.length || !this.classToApply) {
            this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.text);
            return;
        }

        this.renderer.setProperty(
            this.el.nativeElement,
            'innerHTML',
            this.getFormattedText()
        );
    }

    getFormattedText(): SafeHtml {
        const re = new RegExp(`(${this.searchedWords.join('|')})`, 'g');

        //return this.text.replace(re, `<span class="${this.classToApply}">$1</span>`);
        this.text = this.text.replace(re, `<span class="${this.classToApply}">$1</span>`);
       // this.text = vkbeautify.xml(this.text);
        return this.sanitizer.bypassSecurityTrustHtml(this.text);
    }
}
