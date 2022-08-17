import { Directive, EventEmitter, HostListener, HostBinding, Output, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDragAndDrop]'
})
export class DragAndDropDirective implements OnInit {

  constructor() { }

  @Input()
  dragAndDropDisabled: boolean = false;

  @Output()
  private filesChangeEmiter: EventEmitter<FileList> = new EventEmitter();

    @HostBinding('style.background') private background = '#ebebeb';
    @HostBinding('style.border-radius') private borderradius = '20px';
    @HostBinding('style.height') private boxheight = '32px';
    
  @HostBinding('placeholder') private placeholder = '';

  ngOnInit() {
    if (!this.dragAndDropDisabled) {
        this.placeholder = 'Select a file to upload';
    }
  }
  // The rest of the code with @HostBinding and @HostListeners ...
  @HostListener('drop', ['$event']) public onDrop(evt) {
    if (!this.dragAndDropDisabled) {
      evt.preventDefault();
      evt.stopPropagation();
      if (evt.dataTransfer.types.some(a => a == 'Files')) {
        let files = evt.dataTransfer.files;
        if (files.length > 0) {
          this.filesChangeEmiter.emit(files[0]);
        }
      }
        this.background = '#ebebeb';
        this.borderradius = '20px'
        this.boxheight = '32px';
        this.placeholder = 'Select a file to upload';
    }
  }

  @HostListener('dragover', ['$event'])
  public onDragOver(event: Event): void {
    if (!this.dragAndDropDisabled) {
      event.preventDefault();
      this.background = '#fff';
        this.placeholder = 'Drop file here!';
        this.borderradius = '20px';
        this.boxheight = '32px';
    }
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: Event): void {
    if (!this.dragAndDropDisabled) {
      event.preventDefault();
      this.background = '#ebebeb';
        this.placeholder = 'Select a file to upload';
        this.borderradius = '20px';
        this.boxheight = '32px';
    }
  }
}


