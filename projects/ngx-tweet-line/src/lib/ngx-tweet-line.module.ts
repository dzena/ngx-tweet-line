import { NgModule } from '@angular/core';
import { NgxTweetComponent } from './components/ngx-tweet.component';
import { NgxTwitterTimelineComponent } from './components/ngx-twitter-timeline.component';
import { NgxFollowBtnComponent } from './components/ngx-follow-btn.component';
import { NgxTweetBtnComponent } from './components/ngx-tweet-btn.component';

@NgModule( {
  imports: [],
  declarations: [
    NgxTweetComponent,
    NgxTwitterTimelineComponent,
    NgxFollowBtnComponent,
    NgxTweetBtnComponent
  ],
  exports: [
    NgxTweetComponent,
    NgxTwitterTimelineComponent,
    NgxFollowBtnComponent,
    NgxTweetBtnComponent
  ]
} )
export class NgxTweetLineModule {
}
