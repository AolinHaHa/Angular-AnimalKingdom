import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PyramidComponent } from './pyramid/pyramid.component';
import { PyramidRow } from './pyramid-rows/pyramid-row.service';

@NgModule({
  declarations: [
    AppComponent,
    PyramidComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PyramidRow],
  bootstrap: [AppComponent]
})
export class AppModule { }
