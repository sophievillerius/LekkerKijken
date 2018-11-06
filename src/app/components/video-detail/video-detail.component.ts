import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/youtube-movie';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from 'src/app/services/youtube.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit {


  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private youtubeService: YoutubeService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('id: ' + id);
    this.youtubeService.getSingleMovie(id)
      .subscribe(data => this.movie = data);
    console.log('getting the movie');
  }

  goBack(): void {
    this.location.back();
  }

  getVideoUrl(id: any) {
    const embedUrl = String(id);
    return 'https://www.youtube.com/embed/' + embedUrl;
  }

  rateMovie(rating) {
    this.movie.rating = rating;
    this.youtubeService.updateMovie(this.movie.id, this.movie);
  }
 
  isRated(movie: Movie) {
    if (movie.rating !== 0) {
      return true;
    } else {
      return false;
    }
  }

  getStarArray(rating: number) {
    const result = [];
    for (let i = 1; i <= rating; i++) {
      result.push(i);
    }
    return result;
  }

}
