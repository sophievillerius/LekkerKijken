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

@NgModule({
  declarations: [
    AppComponent,
    YoutubeComponent,
    SafepipePipe,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    HomepageComponent,
    VideoCardComponent
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
