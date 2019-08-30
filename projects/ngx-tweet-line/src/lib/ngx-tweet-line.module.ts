import { NgModule } from '@angular/core';
import { NgxTweetComponent } from './ngx-tweet.component';
import { NgxTwitterTimelineComponent } from './ngx-twitter-timeline.component';
import { NgxFollowBtnComponent } from './ngx-follow-btn.component';

@NgModule( {
  imports: [],
  declarations: [ NgxTweetComponent, NgxTwitterTimelineComponent, NgxFollowBtnComponent ],
  exports: [ NgxTweetComponent, NgxTwitterTimelineComponent, NgxFollowBtnComponent ]
} )
export class NgxTweetLineModule {
}
