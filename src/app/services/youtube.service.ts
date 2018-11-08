import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/youtube-movie';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { MovieActionTypes } from '../store/movies/movies.actions';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(
    private http: HttpClient,
    private store: Store<any>,
    private router: Router,
    ) { }

  url = 'http://localhost:8080/api/movies/';

  getAll(): Observable<Movie[]> {
    console.log('getting all the data from the service');
    return this.http.get<Movie[]>(this.url);
  }

  getSingleMovie(id): Observable<Movie> {
    return this.http.get<Movie>(this.url + id);
  }

  submitMovie(title: string, youTubeId: string, description: string): Observable<Movie> {
    const newMovie: Movie = new Movie;
    console.log('movie was made');
    newMovie.title = title;
    newMovie.youTubeId = youTubeId;
    newMovie.description = description;
    console.log(newMovie);
    console.log('posting movie');
    // this.http.post(this.url, newMovie).subscribe((data) => {});
    return this.http.post<Movie>(this.url, newMovie).pipe(
      tap((movie: Movie) => this.router.navigate(['videos'])),
      // console.log("added movie w/ id= "+movie.id)),
      // this.router.navigate(['videos'])),
      catchError(this.handleError<Movie>('addMovie'))
    );
    // console.log('post succeeded!');
  }

  public add(newMovie: Movie): Observable<Movie> {
    console.log('call the post from the service');
    // return this.http.post<Movie>(this.url, newMovie).pipe(
    //   tap((movie: Movie) => this.router.navigate(['videos'])),
    //   catchError(this.handleError<Movie>('addMovie'))
    // );
    return this.http.post<Movie>(this.url, newMovie);
  }

  deleteMovie(id: number) {
    console.log('deleting movie');
    // this.http.delete(this.url + id).subscribe((data) => {});
    this.http.delete(this.url + id).subscribe((data) => this.store.dispatch({
      type: MovieActionTypes.REMOVE
    }));
    console.log('delete and dispatch succeeded!');
  }

  updateMovie(id: number, movie: Movie) {
    console.log('updating movie');
    this.http.put(this.url + id, movie).subscribe((data) => {});
    console.log('update succeeded!');
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
