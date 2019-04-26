import {
  UnderwriterComponent
} from './underwriter.component';
import {
  NgModule
} from '@angular/core';
import {
  RouterModule
} from '@angular/router';
import {
  CommonModule
} from '@angular/common';
import {
  UnderwriterService
} from './underwriter.service';
import {
  TableModule
} from 'primeng/table';
import {
  AppModule
} from '../app.module';
import {
  CoreModule
} from '../core/core.module';
import {
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';

const routes = [{
    path: '',
    component: UnderwriterComponent
  },
  {
    path: 'create-project/:accountId',
    component: UnderwriterComponent,
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TableModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
  ],
  declarations: [UnderwriterComponent],
  providers: []
})


export class UnderwriterModule {}
