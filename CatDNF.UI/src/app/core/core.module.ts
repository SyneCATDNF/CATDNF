import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbComponent } from './bread-crumbs/bread-crumb.component';
import { ToastMessageComponent } from './message/message.component';
import { ToastModule } from 'primeng/toast';
import { WebRequest } from './web.request';
import { AuthGuard } from './guard/auth.guard';
import { LogingService } from './helpers/loging.service';
import { CommonService } from './helpers/common.service';
import { AuthDirective } from './helpers/auth.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { GridComponent } from './grid/grid.component';
import { GridColumnDirective } from './grid/grid-column.directive';
import { TableModule } from 'primeng/table';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ComplexGridComponent } from './grid/complex-grid/complex-grid.component';
import { EditableGridComponent } from './grid/editable-grid/editable-grid.component';
import { ComplexGridColumnDirective } from './grid/complex-grid/complex-grid-column.directive';
import { EditableGridColumnDirective } from './grid/editable-grid/editable-grid-column.directive';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

import { CheckboxModule } from 'primeng/checkbox';
import { AutoCompleteModule } from 'primeng/autocomplete';
@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ToastModule,
    TableModule,
    ContextMenuModule,
    CalendarModule,
    MultiSelectModule,
    CheckboxModule,
    AutoCompleteModule,
    DropdownModule,
    DeviceDetectorModule.forRoot(),
  ],
  declarations: [
    BreadCrumbComponent,
    ToastMessageComponent,
    AuthDirective,
    GridComponent,
    ComplexGridComponent,
    EditableGridComponent,
    GridColumnDirective,
    ComplexGridColumnDirective,
    EditableGridColumnDirective,
  ],
  exports:[
    BreadCrumbComponent,
    ToastMessageComponent,
    AuthDirective,
    GridComponent,
    ComplexGridComponent,
    EditableGridComponent,
    GridColumnDirective,
    ComplexGridColumnDirective,
    EditableGridColumnDirective,
  ],
  providers: [AuthGuard]
})


export class CoreModule {}
