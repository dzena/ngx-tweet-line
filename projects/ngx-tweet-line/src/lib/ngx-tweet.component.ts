import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewEncapsulation
} from '@angular/core';
import { NgxTweetLineService } from './ngx-tweet-line.service';
import NgxTweetOptions from './ngx-tweet-options.interface';

@Component( {
  selector: 'lib-ngx-tweet',
  template: '<ng-content></ng-content>',
  styles: [ '.twitter-tweet { transform: none !important; margin-bottom: 0 !important;; margin-top: 0 !important; }' ],
  encapsulation: ViewEncapsulation.None
} )
export class NgxTweetComponent implements OnChanges {
  @Input() public tweetId: string;
  @Input() public tweetOptions: NgxTweetOptions;

  public isTwitterScriptLoading = true;

  constructor( private readonly _elementRef: ElementRef,
               private readonly _ngxTweetService: NgxTweetLineService ) {
  }

  ngOnChanges(): void {
    this._loadTwitterWidget();
  }

  private _loadTwitterWidget() {
    this._ngxTweetService
      .loadScript()
      .subscribe(
        twttr => {
          const nativeElement = this._elementRef.nativeElement;
          nativeElement.innerHTML = '';

          this._updateTwitterScriptLoadingState();
          window[ 'twttr' ]
            .widgets
            .createTweet( this.tweetId, nativeElement, { ...this.tweetOptions } )
            .then( embed => {
              // console.log(embed);
            } )
            .catch( error => console.error( error ) );
        },
        err => console.error( err ) );
  }

  private _updateTwitterScriptLoadingState(): void {
    this.isTwitterScriptLoading = false;
  }
}
