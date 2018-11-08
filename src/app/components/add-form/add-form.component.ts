import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/youtube-movie';
import { YoutubeService } from '../../services/youtube.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as movieActions from '../../store/movies/movies.actions';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app-state.interface';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  public newMovieForm: FormGroup = new FormGroup(
    {
      title: new FormControl(''),
      youTubeId: new FormControl(''),
      description: new FormControl('')
    }
  );

  // movie = new Movie;

  constructor(
    private store: Store<IAppState>
  ) { }

  ngOnInit() {
  }

  submit() {
    console.log(this.getMovieModel());
    console.log('call the submit function from the add-form component');
    const newMovie: Movie = this.getMovieModel();
    this.store.dispatch(new movieActions.Add(newMovie));
  }

  private getMovieModel(): Movie {
    return <Movie> {
      title: this.newMovieForm.value.title,
      youTubeId: this.newMovieForm.value.youTubeId,
      description: this.newMovieForm.value.description
    };
  }

  // submit(title: string, youTubeId: string, description: string) {
  //   this.youtubeService.submitMovie(title, youTubeId, description).subscribe((data) => {});
  // }

}
