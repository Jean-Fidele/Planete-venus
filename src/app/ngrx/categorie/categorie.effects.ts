import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CategorieActionType, GetNameAction } from './categorie.action';

@Injectable()
export class CategorieEffects {
  constructor(private effectActions: Actions) {
  }

  getNameChaineEffect: Observable<Action> = createEffect(
    () => this.effectActions.pipe(
      ofType(CategorieActionType.GET_EVENT_NAME),
      mergeMap((action) => {
        return new GetNameAction("")
      }))
  )


}
