import { Directive, OnInit, OnDestroy, ElementRef, HostListener, 
         Renderer2,  // dom wrapper
         Input,
         Output,
         EventEmitter
       } from '@angular/core';

// attribute level
// no template for directive
// <p highlight
// <div highlight
// p, div are host elements
// directive can receive events when we on the host element
// must have []


// instead of writing samething again and again we can use directives

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit, OnDestroy {

  @Input()
  backgroundColor: string = 'lightgreen';

  @Output()
  highlightEvent: EventEmitter<boolean> = new EventEmitter();

  constructor(private hostElement: ElementRef,
              private renderer: Renderer2) {
    console.log('Directive created');
  }

  ngOnInit(): void {
   console.log('Directive onInit');
   // nativeElement is actual DOM element
   console.log("HOST", this.hostElement.nativeElement.tagName);
  }

  ngOnDestroy(): void {
    console.log('Directive onDestroy');   
  }

  @HostListener('mouseenter')
  onEnter() {
    console.log('mouse enter');
    this.renderer.setStyle(this.hostElement.nativeElement,
                           'background',
                           this.backgroundColor);
  }

  @HostListener('mouseleave')
  onLeave(){
    console.log("Mouse leave");
    this.renderer.removeStyle(this.hostElement.nativeElement,
                              'background');
    this.highlightEvent.emit(false);
  }

}
