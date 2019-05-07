import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxTweetLineModule } from 'ngxTweetLine';
import { FormsModule } from '@angular/forms';

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
