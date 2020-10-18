import { ChangeDetectorRef, Component } from '@angular/core';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
} )
export class AppComponent {
  public title = 'ngx-tweet-line';

  // tweet
  public tweetTheme = 'light';
  public cards = 'show';
  public isLoadingTweet;

  // timeline
  public timelineTheme = 'dark';
  public timelineLimit = 3;
  public profile = 'https://twitter.com/TwitterDev';
  public timelineError = false;
  public isLoadingTimeline;

  // follow btn
  public showScreenName = true;
  public showCount = true;
  public isLoadingFollowBtn;

  // tweet btn
  public tweetBtnSize = 'large';
  public isLoadingTweetBtn;

  constructor( private cdRef: ChangeDetectorRef ) {}

  public onLoadingTweetChanged( loading: boolean ): void {
    this.isLoadingTweet = loading;
    this.cdRef.detectChanges();
  }

  public onLoadingTimelineChanged( loading: boolean ): void {
    this.isLoadingTimeline = loading;
    this.cdRef.detectChanges();
  }

  public onTimelineError(): void {
    this.timelineError = true;
  }

  public onLoadingFollowBtn( loading: boolean ): void {
    this.isLoadingFollowBtn = loading;
    this.cdRef.detectChanges();
  }

  public loadTweetBtn( loading: boolean ): void {
    this.isLoadingTweetBtn = loading;
    this.cdRef.detectChanges();
  }
}
