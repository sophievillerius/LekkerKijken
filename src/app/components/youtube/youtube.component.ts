import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/youtube-movie';
import { MOVIES } from '../../models/mock-movies';
import { YoutubeService } from 'src/app/services/youtube.service';
import { getComponentViewByInstance } from '@angular/core/src/render3/context_discovery';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {

  videoUrl: string;
  partialUrl: string;
  movies: Movie[];
  obs: any;

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit() {
    // this.videoUrl = "https://www.youtube.com/embed/FhFjTc41UgU";
    // this.partialUrl = "FhFjTc41UgU";
    // this.movies = MOVIES;
    this.getMovies();
  
  }

  getVideoUrl(id: any) {
    const embedUrl = String(id);
    return "https://www.youtube.com/embed/" + embedUrl;
  }

  submit(item: string) {
    var newMovie: Movie = new Movie;
    newMovie.youTubeId = item;
    this.movies.push(newMovie);
  }


  getMovies() {
    this.obs = this.youtubeService.getAll()
          .subscribe(movies => this.movies = movies);
  }

}
