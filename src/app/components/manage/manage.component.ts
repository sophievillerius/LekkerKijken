import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';
import { Movie } from 'src/app/models/youtube-movie';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  movies: Movie[];
  obs: any;

  constructor(
    private youtubeService: YoutubeService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.obs = this.youtubeService.getAll()
          .subscribe(movies => this.movies = movies);
  }

  deleteMovie(id: number) {
    if(window.confirm('Are sure you want to delete this item ?')) {
    this.youtubeService.deleteMovie(id);
    console.log('delete succeeded!')
    location.reload();
    }
  }

  changeMovie(title: string, youTubeId: string, description: string, id: number) {
    console.log(id);
    let updateMovie: Movie = this.movies.find(Movie => Movie.id === id);
    console.log(updateMovie);
    console.log(title, youTubeId, description);
    updateMovie.title = title;
    updateMovie.youTubeId = youTubeId;
    updateMovie.description = description;
    console.log("trying to change..")
    console.log(updateMovie);
    this.youtubeService.updateMovie(id, updateMovie);
    console.log("changed!")
  }

}
