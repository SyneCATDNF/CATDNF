import {
  Injectable
} from '@angular/core';
import {
  Observable,
  of ,
  observable
} from 'rxjs';
import {
  WebRequest
} from '../core/web.request';
import {
  environment
} from 'src/environments/environment';

@Injectable()
export class UnderwriterService {
  private webApiBaseUrl = environment.baseServerUrl;
  constructor(private webRequest: WebRequest) {}
}
