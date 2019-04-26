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
  GridColumnDirective
} from '../grid-column.directive';
import { GridComponent } from '../grid.component';
import { EditableGridComponent } from './editable-grid.component';


@Directive({
  selector: 'cat-editable-grid-column, [cat-editable-grid-column]'
})
export class EditableGridColumnDirective extends GridColumnDirective {
  @Input() editType: string;
  // @Input() editMasterValues: string;

  constructor(gridComponent: EditableGridComponent) {
    super(gridComponent);
    //gridComponent.addColumn(this);
  }

  /**
   * on column click
   */

}
