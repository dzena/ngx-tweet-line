import { ChangeDetectorRef, Component } from '@angular/core';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
} )
export class AppComponent {
  title = 'ngx-tweet-line';
  color = '#000000';
  theme = 'light';
  theme1 = 'light';
  cards = 'hidden';

  profile = 'LittleOtter1';
  error = false;

  public isLoadingTweet;
  public isLoadingTimeline;
  public isLoadingFollowBtn;
  public isLoadingTweetBtn;
  hidden = false;

  constructor( private cdRef: ChangeDetectorRef ) {}

  loadTweet( loading: boolean ) {
    this.isLoadingTweet = loading;
    this.cdRef.detectChanges();
  }

  loadTimeline( loading: boolean ) {
    this.isLoadingTimeline = loading;
    this.cdRef.detectChanges();
  }

  loadFollowBtn( loading: boolean ) {
    this.isLoadingFollowBtn = loading;
    this.cdRef.detectChanges();
  }

  loadTweetBtn( loading: boolean ) {
    this.isLoadingTweetBtn = loading;
    this.cdRef.detectChanges();
  }

  hide() {
    // this.hidden = !this.hidden;
    this.profile = 'LittleOtter1';
  }

  show() {
    this.profile = 'juristr';
    // this.hidden = !this.hidden;
  }

  onSuccess() {
    this.error = false;
  }

  onError() {
    this.error = true;
  }
}
