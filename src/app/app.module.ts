import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineTitleDirective } from './timeline-title.directive';
import { TitleDefOutletDirective } from './title-def-outlet.directive';

@NgModule({
  declarations: [AppComponent, TimelineComponent, TimelineTitleDirective, TitleDefOutletDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
