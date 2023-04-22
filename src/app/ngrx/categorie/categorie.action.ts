import {Action} from '@ngrx/store';

export enum CategorieActionType{
  GET_EVENT_NAME ="Je sui Jean Fidele RAKOTOMAMONJY",
  GET_EVENT_DRESS="J habite a Anjanahary",
}


export class GetNameAction implements Action{
  type: CategorieActionType = CategorieActionType.GET_EVENT_NAME;
  constructor(public payload:string) {
  }
}

export type CategorieActions = GetNameAction;
