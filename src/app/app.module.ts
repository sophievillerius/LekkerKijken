import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { SafepipePipe } from './pipes/safepipe.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';
import { VideoDetailListComponent } from './components/video-detail-list/video-detail-list.component';
import { ManageComponent } from './components/manage/manage.component';
import { VideoThumbnailComponent } from './components/video-thumbnail/video-thumbnail.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { IAppState } from './store/app-state.interface';
// import { rootReducer } from './store/app.reducer';
import { moviesReducer } from './store/movies/movies.reducer';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeComponent,
    SafepipePipe,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    HomepageComponent,
    VideoCardComponent,
    LoginFormComponent,
    AddFormComponent,
    DashboardComponent,
    VideoDetailComponent,
    VideoDetailListComponent,
    ManageComponent,
    VideoThumbnailComponent,
    EditModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ movies: moviesReducer}),
    // StoreModule.forRoot<IAppState>(rootReducer),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
