import {
  SimpleChanges,
  Component,
  OnChanges,
  Input,
  ChangeDetectorRef,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  IBreadCrumb
} from '../core.model';
import {
  Router
} from '@angular/router';
import { BreadCrumbService } from './bread-crumb.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'cat-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']

})

export class BreadCrumbComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public title: string;
  isAlive = true;
  hasSub = false;
  subName = '';

  public crumbs: IBreadCrumb[] = [];

  constructor(private router: Router, private crumbService: BreadCrumbService ) {}
  ngOnInit() {
    this.crumbs = this.crumbService.crumbs;
    // this.crumbs.forEach(element => {
    //   if(element.path === 'Underwriter' && element.entity && element.entity.entityValue && element.entity.entityValue.length > 0){
    //      this.hasSub = true;
    //      this.subName =  element.entity.entityValue;
    //   }
    // });
  }
  ngOnDestroy() {
    this.isAlive = false;
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  public moveToRoute(index, item) {
    if (index !== this.crumbs.length - 1) {
      this.crumbService.removeCrumbsAfter(item.path)
      .subscribe((res)=> {
        if(res){
        this.router.navigate([item.route]);
        }
      });
    }
  }
}
