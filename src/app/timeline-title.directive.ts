import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[timelineTitleDef]',
})
export class TimelineTitleDirective {
  constructor(public tempalteRef: TemplateRef<any>) {}
}
