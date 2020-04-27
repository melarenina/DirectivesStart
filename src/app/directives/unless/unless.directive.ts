import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // Gettin the place where we used this diretive in the template
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

   // Whenever the input value, the property changes inside or outside, it will execute a method
   // The property name must be the same as the selector
   @Input() set appUnless(condition: boolean){
    if ( !condition ){
      this.vcRef.createEmbeddedView(this.templateRef); // It creates a view templateRef
    } else {
      this.vcRef.clear(); // Removes everything from this place in the DOM
    }
  }

}
