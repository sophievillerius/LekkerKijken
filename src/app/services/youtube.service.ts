import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/youtube-movie';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:8080/api/movies/";

  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url);
  }

  submitMovie(title: string, youTubeId: string, description: string) {
    var newMovie: Movie = new Movie;
    console.log("movie was made");
    newMovie.title = title;
    newMovie.youTubeId = youTubeId;
    newMovie.description = description;
    console.log(newMovie);
    console.log("posting movie");
    this.http.post(this.url, newMovie).subscribe((data) => {});
    console.log("post succeeded!");
  }
}
