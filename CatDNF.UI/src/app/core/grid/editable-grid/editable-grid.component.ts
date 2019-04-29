import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import {
  LazyLoadEvent
} from 'primeng/api';
import { GridColumnDirective } from '../grid-column.directive';
import { GridComponent } from '../grid.component';

@Component({
  selector: 'web-editable-grid',
  templateUrl: './editable-grid.component.html',
  styleUrls: ['./editable-grid.component.scss']
})
export class EditableGridComponent extends GridComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() { }

}
