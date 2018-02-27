import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor(element: ElementRef) 
  { 
    element.nativeElement.innerText = "[THIS TEXT ADDED BY changeText Directive] ";
  }
}
