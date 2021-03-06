import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { NgxTweetLineService } from '../ngx-tweet-line.service';
import NgxTweetOptions from '../models/ngx-tweet-options.interface';
import { take } from 'rxjs/operators';

@Component( {
  selector: 'lib-ngx-tweet',
  template: '',
  styles: [ '.twitter-tweet { transform: none !important; margin-bottom: 0 !important;; margin-top: 0 !important; }' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class NgxTweetComponent implements OnChanges {
  @Input() public tweetId: string;
  @Input() public tweetOptions: NgxTweetOptions;

  @Output() loading = new EventEmitter<boolean>();
  @Output() success = new EventEmitter<void>();
  @Output() error = new EventEmitter<void>();

  constructor( private readonly _elementRef: ElementRef,
               private readonly _ngxTweetService: NgxTweetLineService ) {
  }

  ngOnChanges(): void {
    this.loading.emit( true );
    this._loadTwitterWidget();
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
            .createTweet( this.tweetId, nativeElement, { ...this.tweetOptions } )
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
