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
import { NgxTweetLineService } from './ngx-tweet-line.service';
import NgxFollowBtnOptions from './ngx-follow-btn-options.interface';

@Component( {
  selector: 'lib-ngx-follow-btn',
  template: '',
  styles: [ '.twitter-follow-btn { transform: none !important; margin-bottom: 0 !important;; margin-top: 0 !important; }' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class NgxFollowBtnComponent implements OnChanges {
  @Input() public username: string;
  @Input() public options: NgxFollowBtnOptions;

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
      .subscribe(
        () => {
          const nativeElement = this._elementRef.nativeElement;
          nativeElement.innerHTML = '';

          window[ 'twttr' ]
            .widgets
            .createFollowButton( this.username, nativeElement, { ...this.options } )
            .then( ( r ) => {
              if ( !r ) {
                this.error.next();
              } else {
                this.success.next();
              }
              this.loading.emit( false );
            } )
            .catch( error => console.error( error ) );
        },
        err => console.error( err ) );
  }
}
