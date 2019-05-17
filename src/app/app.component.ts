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

  public isLoadingTweet;
  public isLoadingTimeline;

  constructor( private cdRef: ChangeDetectorRef ) {}

  loadTweet( loading: boolean ) {
    this.isLoadingTweet = loading;
    this.cdRef.detectChanges();
  }

  loadTimeline( loading: boolean ) {
    this.isLoadingTimeline = loading;
    this.cdRef.detectChanges();
  }
}
