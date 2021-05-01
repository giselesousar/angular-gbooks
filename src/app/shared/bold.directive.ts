import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[bold]'
})
export class BoldDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2 // dúvida Renderer2
  ) {
    this._renderer.setStyle(this._elementRef.nativeElement, 'fontWeight', 'bold');
   }

}
