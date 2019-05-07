import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { NgxTweetLineService } from './ngx-tweet-line.service';
import NgxTweetOptions from './ngx-tweet-options.interface';

@Component( {
  selector: 'lib-ngx-tweet',
  template: '<ng-content></ng-content>',
  styles: [ '.twitter-tweet { transform: none !important; }' ],
  encapsulation: ViewEncapsulation.None
} )
export class NgxTweetComponent implements OnInit {
  @Input() public tweetId: string;
  @Input() public tweetOptions: NgxTweetOptions;

  public isTwitterScriptLoading = true;

  constructor( private readonly _elementRef: ElementRef,
               private readonly _ngxTweetService: NgxTweetLineService ) {
  }

  public ngOnInit(): void {
    this._loadTwitterScript();
  }

  private _loadTwitterScript(): void {
    this._ngxTweetService
      .loadScript()
      .subscribe( ( twitterData: any ) => {
        this._updateTwitterScriptLoadingState();
        twitterData.widgets.createTweet( this.tweetId, this._elementRef.nativeElement, { ...this.tweetOptions } );
      } );
  }

  private _updateTwitterScriptLoadingState(): void {
    this.isTwitterScriptLoading = false;
  }
}
