import { NgModule } from '@angular/core';
import { NgxTweetComponent } from './ngx-tweet.component';
import { NgxTwitterTimelineComponent } from './ngx-twitter-timeline.component';
import { NgxFollowBtnComponent } from './ngx-follow-btn.component';
import { NgxTweetBtnComponent } from './ngx-tweet-btn.component';

@NgModule( {
  imports: [],
  declarations: [ NgxTweetComponent, NgxTwitterTimelineComponent, NgxFollowBtnComponent, NgxTweetBtnComponent ],
  exports: [ NgxTweetComponent, NgxTwitterTimelineComponent, NgxFollowBtnComponent, NgxTweetBtnComponent ]
} )
export class NgxTweetLineModule {
}
