import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';
import { Movie } from 'src/app/models/youtube-movie';

@Component({
  selector: 'app-video-detail-list',
  templateUrl: './video-detail-list.component.html',
  styleUrls: ['./video-detail-list.component.scss']
})
export class VideoDetailListComponent implements OnInit {

  obs: any;
  movies: Movie[];

  constructor(
    private youtubeService: YoutubeService,
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  getVideoUrl(id: any) {
    const embedUrl = String(id);
    return "https://www.youtube.com/embed/" + embedUrl;
  }

  getMovies() {
    this.obs = this.youtubeService.getAll()
          .subscribe(movies => this.movies = movies);
  }

  getYouTubeImg(id: any) {
    const embedUrl = String(id);
    return "https://img.youtube.com/vi/" + embedUrl + "/0.jpg"
  }

}
