import { Injectable } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import * as movieActions from './movies.actions';
import { Action } from '@ngrx/store';
import { MovieActionTypes } from '../../store/movies/movies.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Movie } from 'src/app/models/youtube-movie';

@Injectable()
export class MoviesEffects {

  constructor(
    private readonly youtubeService: YoutubeService,
    private readonly actions$: Actions) { }

  @Effect()
  load$: Observable<movieActions.GetAllSuccess | movieActions.GetAllError> = this.actions$.pipe(
    ofType(MovieActionTypes.GETALL),
    mergeMap(action =>
      this.youtubeService.getAll().pipe(
        // If successful, dispatch success action with result
        map((movies) => new movieActions.GetAllSuccess(movies)),
        // If request fails, dispatch failed action
        catchError(() => of(new movieActions.GetAllError()))
      )
    )
  );

  @Effect()
  add$: Observable<movieActions.AddComplete | movieActions.AddError> = this.actions$.pipe(
    ofType<movieActions.Add>(MovieActionTypes.ADD),
    mergeMap(action =>
      this.youtubeService.add(action.movie).pipe(
        map((movie: Movie) => new movieActions.AddComplete(movie)),
        catchError(() => of(new movieActions.AddError()))
      )
    )
  );
}
