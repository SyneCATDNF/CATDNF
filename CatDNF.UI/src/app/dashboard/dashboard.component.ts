import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  DashboardService
} from './dashboard.service'
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import {
  Router
} from '@angular/router';

import {
  IEntity,
  EntityType
} from './dashboard.model';

import {
  takeWhile
} from 'rxjs/operators';
import {
  BreadCrumbService
} from '../core/bread-crumbs/bread-crumb.service';
import { CommonService } from '../core/helpers/common.service';
import { ContextMenuItem, SelectedGridItem } from 'src/app/core/core.model';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'cat-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  entityType: EntityType = EntityType.Underwriter;
  isAlive: boolean = true;
  public dashboardForm: FormGroup;

  lazyFunction: Function;
  contextMenyFunction: Function;
  items: ContextMenuItem[];
  data1: any[] = [];
  selectedProject: any;
  constructor(private formBuilder: FormBuilder,
    private commonService: CommonService,
    private dashboardService: DashboardService,
    private crumbService: BreadCrumbService) {}

  ngOnDestroy() {
    this.isAlive = false;
  }

  ngOnInit() {
    this.commonService.SetSpinnerStatus(true);

    this.crumbService.InitializeWithDashboard();
    this.dashboardForm = this.formBuilder.group({
      entities: [''],
      selectedEntity: ['']
    });
    this.getDashboardData();
  }

  private getDashboardData() {
    //To remove below turning off spinner once API is integrated
    this.commonService.SetSpinnerStatus(false);

  // Delete below code - this is to test grid

    this.items = [
      { label: 'View', icon: 'pi pi-search', function: this.contextMenyFunction },
      { label: 'Delete', icon: 'pi pi-times', function: this.contextMenyFunction }
    ];

    this.data1.push({ projectId: 1, name: 'HSBC', revenue: 100, cost: 20, startDate: new Date() });
    this.data1.push({ projectId: 1, name: 'AQR', revenue: 100, cost: 20, startDate: new Date() });
    this.data1.push({ projectId: 1, name: 'TransAmerica', revenue: 200.253, cost: 20, startDate: new Date() });
    this.data1.push({ projectId: 1, name: 'Liberty', revenue: 300.355, cost: 20, startDate: new Date() });
    this.data1.push({ projectId: 1, name: 'EverestRe', revenue: 400.998, cost: 20, startDate: new Date() });

  }

  // Delete this code - this is to test grid
  public view(item: any){
    console.log(`rows selected for view ${item}`);
  }
  public delete(item: any){
    console.log(`rows selected for delete ${item}`);
  }
  public edit(item : SelectedGridItem<any>){
    console.log(item);
    alert(`clicked ${item.field} for ${item.row.name}`)
  }
  public rowsSelected(items: any){
    console.log(`rows selected ${items}`);
  }
  public onContextMenuSelect(item :any, label:string){
    console.log(`context menu selected ${label} with ${item.name}`);

  }
  public lazySelect(event: LazyLoadEvent){

  }

}
