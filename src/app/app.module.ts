import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from 'src/app/child1/child1.component';
import { Child2Component } from 'src/app/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Child1Component,
    Child2Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
