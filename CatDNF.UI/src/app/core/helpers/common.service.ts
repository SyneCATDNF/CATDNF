import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  private showSpinner: boolean = false;
  public spinnerSubject = new Subject<boolean>();
  constructor(private authService: AuthService) {

  }
  
  public showErrorMessage(err: any): boolean {
    //TO DO prepare framework for showing error.
    return true;
  }

  public SetSpinnerStatus(flag : boolean){
    this.showSpinner = flag;
    this.spinnerSubject.next(this.showSpinner);
  }
  
  public getRequestHeader = () => {
    const token = this.authService.getToken();
    let header = new HttpHeaders
    ({ Accept:'application/json',
      'Content-Type':'application/json',
      'Cache-Control':'no-cache',
      Pragma:'no-cache',
      Authorization: 'Bearer ' + token});
    // header.set('Accept', 'application/json');
    // header.set('Content-Type', 'application/json');
    // header.set('Cache-Control', 'no-cache');
    // header.set('Pragma', 'no-cache');
    // //const token = this.authService.getToken();
    // if (token && token.length > 0) {
    //   header.set('Authorization', 'Bearer ' + token);
    // }
    return header;
  }
}
