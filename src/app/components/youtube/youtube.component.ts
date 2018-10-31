import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/youtube-movie';
import { MOVIES } from '../../models/mock-movies';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {

  videoUrl: string;
  partialUrl: string;
  movies: Movie[];

  constructor() { }

  ngOnInit() {
    this.videoUrl = "https://www.youtube.com/embed/FhFjTc41UgU";
    this.partialUrl = "FhFjTc41UgU";
    this.movies = MOVIES;
  }

  getVideoUrl(id: any) {
    const embedUrl = String(id);
    return "https://www.youtube.com/embed/" + embedUrl;
  }

  submit(item: string) {
    var newMovie: Movie = new Movie;
    newMovie.id = item;
    this.movies.push(newMovie);
  }

}
