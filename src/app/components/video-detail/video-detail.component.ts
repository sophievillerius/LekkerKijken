import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/youtube-movie';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from 'src/app/services/youtube.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit {


  @Input() movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private youtubeService: YoutubeService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    console.log('do i work?');
    const id = +this.route.snapshot.paramMap.get('id');
    this.youtubeService.getSingleMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back();
  }

  getVideoUrl(id: any) {
    const embedUrl = String(id);
    return "https://www.youtube.com/embed/" + embedUrl;
  }

  rateMovie(rating) {
    this.movie.rating = rating;
    this.youtubeService.updateMovie(this.movie.id, this.movie);
  }

}