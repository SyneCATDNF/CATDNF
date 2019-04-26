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
  SelectedGridItem
} from '../../core.model';
import {
  ComplexGridComponent
} from './complex-grid.component';
import {
  GridColumnDirective
} from '../grid-column.directive';
import { GridComponent } from '../grid.component';


@Directive({
  selector: 'cat-complex-grid-column, [cat-complex-grid-column]'
})
export class ComplexGridColumnDirective extends GridColumnDirective {
  constructor(gridComponent: ComplexGridComponent) {
    super(gridComponent);
    //gridComponent.addColumn(this);
  }

  /**
   * on column click
   */

}
