import { Component, ElementRef, Input, OnChanges } from '@angular/core';
import { NgxTweetLineService } from './ngx-tweet-line.service';
import NgxTwitterTimelineData from './ngx-twitter-timeline-data.interface';
import NgxTwitterTimelineOptions from './ngx-twitter-timeline-options.interface';

@Component( {
  selector: 'lib-ngx-twitter-timeline',
  template: ``
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
;
  defaultData: NgxTwitterTimelineData = {
    sourceType: 'url',
    url: 'https://twitter.com/twitterdev',
    screenName: 'twitterdev'
  };

  constructor(
    private _elementRef: ElementRef,
    private _twitterService: NgxTweetLineService
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

      this._loadTwitterWidget();
    }
  }

  private _loadTwitterWidget() {
    this._twitterService
      .loadScript()
      .subscribe( ( twitterData: any ) => {
          twitterData
            .widgets
            .createTimeline(
              { ...this.defaultData, ...this.data },
              this._elementRef.nativeElement,
              { ...this.defaultOpts, ...this.opts }
            )
            .then( embed => {
              // console.log(embed);
            } )
            .catch( error => console.error( error ) );
        },
        err => console.error( err ) );
  }
}
