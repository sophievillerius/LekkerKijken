import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/youtube-movie';
import { YoutubeService } from 'src/app/services/youtube.service';
// import { getComponentViewByInstance } from '@angular/core/src/render3/context_discovery';

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
    this.getMovies();
  }

  getVideoUrl(id: any) {
    const embedUrl = String(id);
    return "https://www.youtube.com/embed/" + embedUrl;
  }

  getYouTubeImg(id: any) {
    const embedUrl = String(id);
    return "https://img.youtube.com/vi/" + embedUrl + "/0.jpg"
  }

  // submit(item: string) {
  //   var newMovie: Movie = new Movie;
  //   newMovie.youTubeId = item;
  //   this.movies.push(newMovie);
  // }

  submit(title: string, youTubeId: string, description: string) {
    this.youtubeService.submitMovie(title, youTubeId, description);
  }


  getMovies() {
    this.obs = this.youtubeService.getAll()
          .subscribe(movies => this.movies = movies);
  }

}
