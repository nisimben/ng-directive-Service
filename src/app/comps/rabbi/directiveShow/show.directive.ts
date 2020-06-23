import { Directive, Input, ElementRef, OnInit, HostListener, Output, EventEmitter, HostBinding } from '@angular/core';

@Directive({
  selector: '[appShow]'
})
export class ShowDirective implements OnInit{
  ngOnInit(): void {
    this.el.style.color = this.color;
  }

  el:HTMLElement
  constructor(elref:ElementRef) { 
    this.el = elref.nativeElement
  }
  @Input('clickCounterColor') color :string;

  @HostListener('click') click(){
    this.clickCountChange.emit(`my color is ${this.color} and i was clicked`)
    this.borderColor = this.clicked ?"red":null;
    this.clicked = !this.clicked
  }
  @Output() clickCountChange = new EventEmitter<string>();

  @HostBinding('class.clicked')clicked:boolean;
  @HostBinding('style.border-color')borderColor:string;
  
}

  