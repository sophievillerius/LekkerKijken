import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component'
import { ManageComponent } from './components/manage/manage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'videos', component: VideoCardComponent},
  {path: 'add', component: AddFormComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: VideoDetailComponent },
  {path: 'manage', component: ManageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
