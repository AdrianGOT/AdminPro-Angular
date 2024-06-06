import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMondaroja]'
})
export class MondarojaDirective {

  constructor(private ele: ElementRef) {
    console.log('lalo');
   }


  @HostListener('click') onClick() {
    this.ele.nativeElement.style.color = 'red';
  }

  @HostListener('mouseenter') onMousemove1() {
    this.ele.nativeElement.style.color ='purple';
  }

  @HostListener('mouseout') onMousemove() {
    this.ele.nativeElement.style.color ='bl`ack';
  }
}
