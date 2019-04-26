import { IEntity } from '../dashboard/dashboard.model';

export interface IBreadCrumb{
  path: string;
  route: string;
  entity: IEntity;
}

export interface ISearchResult{
  id : number;
  name : string;
  accountId : string;
}

export interface Message{
  severity: string;
  message : string;
}


export interface SelectedGridItem<T> {
  row: T;
  field: string;
}

export interface ContextMenuItem {
  label: string;
  icon: string;
  // tslint:disable-next-line:ban-types
  function: Function;
}

export interface SingleAccountWorkFlowItem<T> {
  path: string;
  entities: T[];
  newEntities: T[];
  modifiedEntities: T[];
}

