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


  @Input() id: number;
  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private youtubeService: YoutubeService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getMovie();
    console.log(this.movie);
  }

  getMovie(): void {
    
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("id: " + id);
    this.youtubeService.getSingleMovie(id)
      .subscribe(movie => this.movie = movie);
    console.log("getting the movie");
    console.log("movie: "  +this.movie)
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