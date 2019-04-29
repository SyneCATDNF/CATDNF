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
import { WebRequest } from '../../web.request';


@Directive({
  selector: 'cat-editable-grid-column, [cat-editable-grid-column]'
})
export class EditableGridColumnDirective extends GridColumnDirective {
  @Input() editType: string;
  @Input() editDataKey?: string;
  @Input() editDisplayField?: string;
  @Input() editMasterValues?: string;
  @Input() dateValidations?: any;
  @Input() required?: boolean;
  @Input() autoCompleteUrl?: string;

  public autoCompleteSuggestions: any[] = [];
  constructor(gridComponent: EditableGridComponent, private webRequest: WebRequest) {
    super(gridComponent);
    //gridComponent.addColumn(this);
  }

  search(event) {
    this.webRequest.get<any[]>(this.autoCompleteUrl, event.query).subscribe(data => {
      this.autoCompleteSuggestions = data;
    });
  }

  /**
   * on column click
   */

}
