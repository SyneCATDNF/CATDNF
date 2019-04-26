import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
 
import {
  UnderwriterService
} from './underwriter.service';
  
import {
  IBreadCrumb
} from '../core/core.model';
import {
  RoutesRecognized,
  Router
} from '@angular/router';
  
import { CommonService } from '../core/helpers/common.service';
import { BreadCrumbService } from '../core/bread-crumbs/bread-crumb.service';


@Component({
  selector: 'cat-underwriter',
  templateUrl: './underwriter.component.html',
  styleUrls: ['./underwriter.component.scss']
})
export class UnderwriterComponent implements OnInit {
  title = 'Underwriter';
  private isAlive = true;
  constructor(private projectService: UnderwriterService,
              private commonService: CommonService,
              private crumbService: BreadCrumbService,
              private router: Router) {

  }
  ngOnDestroy() {
    this.isAlive = false;
  }

  ngOnInit() {
    this.commonService.SetSpinnerStatus(true);
    this.crumbService.addCrumb({
      path: 'underwriter',
      route: '/underwriter',
      entity: {
        entityId: '',
        entityValue : ''
      }
    });
  }


}
