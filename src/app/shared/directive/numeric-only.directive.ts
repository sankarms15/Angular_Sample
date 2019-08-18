import { Directive, ElementRef, HostListener } from '@angular/core';
import { allowNumberInput } from 'src/app/core/util';

@Directive({
  selector: '[numer-only]'
})
export class NumericOnlyDirective {
  private el: HTMLInputElement;

  constructor(private elementRef: ElementRef) { 
    this.el = this.elementRef.nativeElement;
  }
  @HostListener('keydown', ['$event'])
  onkeydown(e: KeyboardEvent) {
    allowNumberInput(e);
  }
}
