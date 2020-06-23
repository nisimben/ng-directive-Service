import { Directive, ElementRef,HostListener } from '@angular/core';
import { MyServiceService } from '../counterService/my-service.service';

@Directive({
  selector: '[appHighLightLI]'
})
export class HighLightLIDirective {
  
  constructor(public el: ElementRef,private srv:MyServiceService) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.srv.countHover++
    this.el.nativeElement.style.backgroundColor ='yellow';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }
  @HostListener('click') onMouseClick() {
    this.srv.countClick++
    this.el.nativeElement.style.backgroundColor = 'violet';
  }

}
