import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/youtube-movie';
import { YoutubeService } from '../../services/youtube.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  movie = new Movie;

  constructor(
    private location: Location,
    private youtubeService: YoutubeService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  submit(title: string, youTubeId: string, description: string) {
    this.youtubeService.submitMovie(title, youTubeId, description).subscribe((data) => {});
  }

}
