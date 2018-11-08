import { Component, OnInit, Input } from '@angular/core';
import { IAppState } from 'src/app/store/app-state.interface';
import { Store } from '@ngrx/store';
import { Movie } from 'src/app/models/youtube-movie';
import { ActivatedRoute, Router } from '@angular/router';
import { YoutubeService } from 'src/app/services/youtube.service';
import { FormGroup, FormControl } from '@angular/forms';
import * as movieActions from '../../store/movies/movies.actions';


@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  public editMovieForm: FormGroup = new FormGroup(
    {
      title: new FormControl(''),
      youTubeId: new FormControl(''),
      description: new FormControl('')
    }
  );

  movie: Movie;

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private youtubeService: YoutubeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getMovie();
    this.setValues();
  }

  edit() {
    const editMovie = this.getMovieModel();
    console.log(editMovie);
    editMovie.id = this.movie.id;
    console.log('editing the movie');
    this.store.dispatch(new movieActions.Edit(editMovie));
    this.router.navigate(['manage']);
  }

  private getMovieModel(): Movie {
    return <Movie> {
      title: this.editMovieForm.value.title,
      youTubeId: this.editMovieForm.value.youTubeId,
      description: this.editMovieForm.value.description
    };
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('id: ' + id);
    this.youtubeService.getSingleMovie(id)
      .subscribe(data => this.movie = data);
    console.log('getting the movie');
  }

  setValues() {
    console.log(this.movie);
    if (this.movie) {
      this.editMovieForm.controls['title'].setValue(this.movie.title);
      this.editMovieForm.controls['description'].setValue(this.movie.description);
    }
  }

}
