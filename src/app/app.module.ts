import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TextComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
