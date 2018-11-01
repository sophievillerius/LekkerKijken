import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { VideoCardComponent } from './components/video-card/video-card.component';

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "videos", component: VideoCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
