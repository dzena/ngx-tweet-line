import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxTweetLineModule } from 'projects/ngx-tweet-line/src/public_api';

@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxTweetLineModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
