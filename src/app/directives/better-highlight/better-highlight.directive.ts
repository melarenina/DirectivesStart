import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';

  // '' - which property we want to bind
  @HostBinding('style.backgroundColor') backgroundColor: string;
  // @HostBinding('style.color') color = 'black';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
                    // which element you want to style, style do you want, value you want, flag (OPTIONAL)
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }

  // This will happen whenever the event passed on the '' happens
  @HostListener('mouseenter') mouveover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.backgroundColor = this.highlightColor;
    // this.color = 'white';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.backgroundColor = this.defaultColor;
    // this.color = 'black';
  }
}
