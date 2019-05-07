import { NgModule } from '@angular/core';
import { NgxTweetComponent } from './ngx-tweet.component';
import { NgxTwitterTimelineComponent } from './ngx-twitter-timeline.component';

@NgModule( {
  imports: [],
  declarations: [ NgxTweetComponent, NgxTwitterTimelineComponent ],
  exports: [ NgxTweetComponent, NgxTwitterTimelineComponent ]
} )
export class NgxTweetLineModule {
}
