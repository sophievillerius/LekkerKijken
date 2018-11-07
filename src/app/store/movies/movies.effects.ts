import { Injectable } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import * as movieActions from '../../store/movies/movies.actions';
import { MovieActionTypes } from '../../store/movies/movies.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class MoviesEffects {

  constructor(
    private readonly youtubeService: YoutubeService,
    private readonly actions$: Actions) { }

  @Effect()
  load$: Observable<movieActions.GetAllSucces | movieActions.GetAllError> = this.actions$.pipe(
    ofType(MovieActionTypes.GETALL),
    mergeMap(action =>
      this.youtubeService.getAll().pipe(
        // If successful, dispatch success action with result
        map((movies) => new movieActions.GetAllSucces(movies)),
        // If request fails, dispatch failed action
        catchError(() => of(new movieActions.GetAllError()))
      )
    )
  );
}