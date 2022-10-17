import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[titleDefOutlet]',
})
export class TitleDefOutletDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
