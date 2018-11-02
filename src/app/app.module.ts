import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
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
    VideoThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
