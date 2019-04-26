import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from '@angular/core';
import {
  GridColumnDirective
} from '../grid-column.directive';
import {
  LazyLoadEvent,
  MenuItem
} from 'primeng/api';
import {
  inherits
} from 'util';
import {
  GridComponent
} from '../grid.component';
import { ContextMenuItem } from '../../core.model';

@Component({
  selector: 'cat-complex-grid',
  templateUrl: './complex-grid.component.html',
  styleUrls: ['./complex-grid.component.scss']
})
export class ComplexGridComponent extends GridComponent implements OnInit {
  @Input() selectionMode ? : string = '';
  @Input() contextMenuItems ? : ContextMenuItem[]; //{label, icon, }

  menuItems ? : MenuItem[];
  selectedItem: any;
  @Output() rowsSelected: EventEmitter < any > = new EventEmitter < any > ();
  public selectedRows: any;
  constructor() {
    super();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes['contextMenuItems'] && changes['contextMenuItems'].currentValue) {

      const items: MenuItem[] = changes['contextMenuItems'].currentValue;
      if (items.length > 0) {
        this.selectionMode = '';
        this.menuItems = [];
        items.forEach(element => {
          this.menuItems.push({
            label: element.label,
            icon: element.icon,
            command: (event) => this.handleContextMenuClick(this.selectedItem, element.label)
          });
        });
      }
    }
  }
  ngOnInit() {}

  handleContextMenuClick(item: any, label: string) {
    if(this.contextMenuItems){
      const selItem = this.contextMenuItems.filter((e) => e.label === label);
      if(selItem && selItem.length > 0){
        selItem[0].function(item, label);
      }
    }
  }

  onRowSelect(event) {
    if (this.selectionMode === 'single') {
      this.rowsSelected.emit([this.selectedRows]);
    } else if (this.selectionMode === 'multiple') {
      this.rowsSelected.emit(this.selectedRows);
    }
  }

  onRowUnselect(event) {
    if (this.selectionMode === 'single') {
      this.rowsSelected.emit([]);
    } else if (this.selectionMode === 'multiple') {
      this.rowsSelected.emit(this.selectedRows);
    }
  }

}
