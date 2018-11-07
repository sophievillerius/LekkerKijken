import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/youtube-movie';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as movieActions from '../../store/movies/movies.actions';
import { IAppState } from 'src/app/store/app-state.interface';
import { movieloadSelector } from 'src/app/store/status/status.interface';
// import { getComponentViewByInstance } from '@angular/core/src/render3/context_discovery';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {

  movies: Observable<Movie[]>;
  obs: any;
  loadError$: Observable<boolean>;

  constructor(
    private store: Store<IAppState>) { }

  ngOnInit() {
    // this.youtubeService.getAll();
    this.store.dispatch(new movieActions.GetAll());
    console.log('gotten the data from the service into the component');
    this.movies = this.store.pipe(select(s => s.movies));

    this.loadError$ = this.store.select(movieloadSelector);
  }

  getVideoUrl(id: any) {
    const embedUrl = String(id);
    return "https://www.youtube.com/embed/" + embedUrl;
  }

  getYouTubeImg(id: any) {
    const embedUrl = String(id);
    return "https://img.youtube.com/vi/" + embedUrl + "/0.jpg"
  }

  getStarArray(rating: number) {
    var result = [];
    for (var i = 1; i <= rating; i++)
      result.push(i);
    return result;
  };

  // submit(item: string) {
  //   var newMovie: Movie = new Movie;
  //   newMovie.youTubeId = item;
  //   this.movies.push(newMovie);
  // }

  submit(title: string, youTubeId: string, description: string) {
    // this.youtubeService.submitMovie(title, youTubeId, description);
  }


  // getMovies() {
  //   this.obs = this.youtubeService.getAll()
  //         .subscribe(movies => this.movies = movies);
  // }

}
