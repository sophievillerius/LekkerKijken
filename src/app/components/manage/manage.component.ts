import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';
import { Movie } from 'src/app/models/youtube-movie';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/app-state.interface';
import { Observable } from 'rxjs';
import * as fromMovies from '../../store/movies/movies.actions';
import * as movieActions from '../../store/movies/movies.actions';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  movies: Observable<Movie[]>;
  obs: any;

  constructor(
    private youtubeService: YoutubeService,
    private route: ActivatedRoute,
    private readonly store: Store<IAppState>,
    private router: Router
    ) { }

    ngOnInit() {
      this.store.dispatch(new movieActions.GetAll());
      this.movies = this.store.pipe(select(s => s.movies));
      // this.getMovies();
    }

    deleteMovie(id: number) {
      if (window.confirm('Are sure you want to delete this item ?')) {
      console.log(id);
      this.youtubeService.deleteMovie(id);
      console.log('delete succeeded!');
      location.reload();
      }
    }

    // editMovie(id: number) {
    //   this.router.navigate(["/edit/{{movie.id}}"]);
    //   }

  changeMovie(title: string, youTubeId: string, description: string, id: number) {
    console.log(id);
    const updateMovie: Movie = new Movie();
    updateMovie.title = title;
    updateMovie.youTubeId = youTubeId;
    updateMovie.description = description;
    console.log('trying to change..');
    console.log(updateMovie);
    this.youtubeService.updateMovie(id, updateMovie);
    console.log('changed!');
  }

}
