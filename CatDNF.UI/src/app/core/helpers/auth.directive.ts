import { Directive, ElementRef, Input } from '@angular/core';
import { AuthService } from './auth.service';

@Directive({
  selector: '[catAuth]'
})
export class AuthDirective {
    @Input() functionName: string;

    constructor(el: ElementRef, private authService: AuthService) {
      if(!authService.canAccess(this.functionName)){
       el.nativeElement.disabled = true;
      }
      else{
       el.nativeElement.disabled = false;
      }
    }
}
