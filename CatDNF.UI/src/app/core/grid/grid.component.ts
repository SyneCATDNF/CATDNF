import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  GridColumnDirective
} from './grid-column.directive';
import {
  LazyLoadEvent, MenuItem
} from 'primeng/api';

@Component({
  selector: 'cat-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() data: any[];
  @Input() dataKey: string;
  //@Input() ValueSelectFunction ? : Function;
  @Input() gridId: string;
  @Input() paginator ? : boolean;
  @Input() editable ? : boolean;
  @Input() lazy ? : boolean;
  @Input() lazyFunction ? : Function;
  @Input() pageSize ? : number = 2;
  @Input() totalRecords ? : number;
  @Input() export?: boolean;  
  @Input() filter?: boolean;  
  public columns: GridColumnDirective[] = [];
  public selectedRows: any;
  public cols: any[];
  ngOnInit() {}

  public addColumn(column: GridColumnDirective) {
    this.columns.push(column);
  }
  public onColClick(item, selectedRow, selectedfield) {
    if (item.cellClick) {
      item.cellClick.emit({
        row: selectedRow,
        field: selectedfield
      });
    }
  }

  public lazySelect(event: LazyLoadEvent) {
    if (this.lazyFunction) {
      this.lazyFunction(event);
    }
  }
}
