import {
  Directive,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  Host,
  Optional
} from '@angular/core';
import {
  GridComponent
} from './grid.component';
import { SelectedGridItem } from '../core.model';

@Directive({
  selector: 'cat-grid-column, [cat-grid-column]'
})
export class GridColumnDirective {
  @Input() header: string;
  @Input() field: string;
  @Input() type: string;
  @Input() url: string;
  //@Input() itemClick ? : Function;
  @Input() colWidth ? : string;
  @Input() sortable ? : boolean;
  @Output() cellClick: EventEmitter<SelectedGridItem<any>> = new EventEmitter<SelectedGridItem<any>>();

  constructor(gridComponent: GridComponent) {
    gridComponent.addColumn(this);
  }

  /**
   * on column click
   */
 
}
