import {
  Injectable
} from '@angular/core';
import {
  Observable,
  of,
  BehaviorSubject
} from 'rxjs';

import {
  WebRequest
} from '../core/web.request';
import {
 environment
} from 'src/environments/environment';
import { EntityType, IEntity } from './dashboard.model';



@Injectable()
export class DashboardService {
  public entityType : EntityType;
  public entityValue : IEntity;
  public entityValueSubject = new BehaviorSubject<IEntity>(this.entityValue);

  private webApiBaseUrl = environment.baseServerUrl;
  constructor(private webRequest: WebRequest) {
  }
  
  public getSearchData(): Observable < any > {
    return this.webRequest.get < any > (this.webApiBaseUrl + `/dashboard/GetSearchOptions`);
  }

  setEntityValue(selectedValue : IEntity){
    this.entityValue = selectedValue;
    this.entityValueSubject.next(selectedValue);
  }


 
}
