import { Inject, Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { DOCUMENT } from '@angular/common';

// TODO write type definitions for Twitter API

/**
 * This class takes care of loading the twitter script
 */
@Injectable( {
  providedIn: 'root'
} )
export class NgxTweetLineService {
  private readonly TWITTER_OBJECT = 'twttr';
  private readonly TWITTER_SCRIPT_ID = 'twitter-wjs';
  private readonly TWITTER_WIDGET_URL = 'https://platform.twitter.com/widgets.js';

  constructor( @Inject( DOCUMENT ) private readonly _document: Document ) {}

  loadScript(): Observable<any> {
    return new Observable( ( observer: Observer<any> ) => {

      this._startScriptLoad();

      this._document.defaultView[ this.TWITTER_OBJECT ].ready( this._onScriptLoaded( observer ) );

    } );
  }

  private _startScriptLoad(): void {
    const twitterData = this._document.defaultView[ this.TWITTER_OBJECT ] ?? {};

    if ( this._scriptExists() ) {
      this._document.defaultView[ this.TWITTER_OBJECT ] = twitterData;
      return;
    }

    this._appendScriptToDOM();

    twitterData._e = [];

    twitterData.ready = ( callback: Function ) => {
      twitterData._e.push( callback );
    };

    this._document.defaultView[ this.TWITTER_OBJECT ] = twitterData;
  }

  private _scriptExists(): boolean {
    const script = this._document.getElementById( this.TWITTER_SCRIPT_ID );
    return script !== null || typeof script !== 'object';
  }

  private _appendScriptToDOM(): void {
    const firstScriptEl = this._document.getElementsByTagName( 'script' )[ 0 ],
      script = this._document.createElement( 'script' );

    script.id = this.TWITTER_SCRIPT_ID;
    script.src = this.TWITTER_WIDGET_URL;
    firstScriptEl.parentNode.insertBefore( script, firstScriptEl );
  }

  private _onScriptLoaded( observer: Observer<any> ): Function {
    return ( twitterData: any ) => {
      observer.next( twitterData );
      observer.complete();
    };
  }

}
