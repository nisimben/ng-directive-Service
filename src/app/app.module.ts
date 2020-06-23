import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RabbiComponent } from './comps/rabbi/rabbi.component';
import { RabbiPageComponent } from './comps/rabbi/rabbi-page/rabbi-page.component';
import { RabbiDetailsComponent } from './comps/rabbi/rabbi-details/rabbi-details.component';
import { HighLightLIDirective } from './comps/rabbi/directiveShow/highlight.directive';
import { ShowDirective } from './comps/rabbi/directiveShow/show.directive';

@NgModule({
  declarations: [
    AppComponent,
    RabbiComponent,
    RabbiPageComponent,
    RabbiDetailsComponent,
    HighLightLIDirective,
    ShowDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
