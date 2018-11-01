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
}
