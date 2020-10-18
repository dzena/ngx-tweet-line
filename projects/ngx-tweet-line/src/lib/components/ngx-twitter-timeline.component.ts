import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { NgxTweetLineService } from '../ngx-tweet-line.service';
import NgxTwitterTimelineData from '../models/ngx-twitter-timeline-data.interface';
import NgxTwitterTimelineOptions from '../models/ngx-twitter-timeline-options.interface';
import { take } from 'rxjs/operators';

@Component( {
  selector: 'lib-ngx-twitter-timeline',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class NgxTwitterTimelineComponent implements OnChanges {
  /**
   * The data source definition object for the content to be displayed in the widget.
   * May be a widget ID string for a search API timeline or legacy widget
   */
  @Input() data: NgxTwitterTimelineData;
  /**
   * A hash of additional options to configure the widget
   */
  @Input() opts: NgxTwitterTimelineOptions;
  defaultOpts: NgxTwitterTimelineOptions = {
    tweetLimit: 5
  };
  defaultData: NgxTwitterTimelineData = {
    sourceType: 'url',
    url: 'https://twitter.com/twitterdev',
    screenName: 'twitterdev'
  };

  @Output() loading = new EventEmitter<boolean>();
  @Output() success = new EventEmitter<void>();
  @Output() error = new EventEmitter<void>();

  constructor(
    private _elementRef: ElementRef,
    private _ngxTweetService: NgxTweetLineService
  ) { }

  ngOnChanges() {
    if ( this.data && this.data.sourceType ) {
      switch ( this.data.sourceType ) {
        case 'url':
          delete this.defaultData.screenName;
          break;
        case 'profile':
          delete this.defaultData.url;
          break;
        default:
          break;
      }

      this.loading.emit( true );
      this._loadTwitterWidget();
    }
  }

  private _loadTwitterWidget() {
    this._ngxTweetService
      .loadScript()
      .pipe( take( 1 ) )
      .subscribe(
        ( twttr: any ) => {
          const nativeElement = this._elementRef.nativeElement;
          nativeElement.innerHTML = '';

          twttr
            .widgets
            .createTimeline(
              { ...this.defaultData, ...this.data },
              nativeElement,
              { ...this.defaultOpts, ...this.opts }
            )
            .then( ( r ) => {
              // looks like the twitter api doesn't return exceptions
              if ( !r ) {
                this.error.next();
              } else {
                this.success.next();
              }
            } )
            .catch( error => console.error( error ) )
            .finally( () => this.loading.emit( false ) );
        },
        err => console.error( err ) );
  }
}
