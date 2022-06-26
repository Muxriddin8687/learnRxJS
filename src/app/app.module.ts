import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExCurrentNumberComponent } from './ex-current-number/ex-current-number.component';
import { Ex1ndWeekRxJSComponent } from './ex1nd-week-rx-js/ex1nd-week-rx-js.component';
import { Ex2ndWeekRxJSComponent } from './ex2ndWeekRxJS/ex2ndWeekRxJS.component';
import { Ex1Component } from './ex2ndWeekRxJS/ex1/ex1.component';
import { Ex2Component } from './ex2ndWeekRxJS/ex2/ex2.component';
import { Ex3Component } from './ex2ndWeekRxJS/ex3/ex3.component';
import { Ex4Component } from './ex2ndWeekRxJS/ex4/ex4.component';
import { Ex5Component } from './ex2ndWeekRxJS/ex5/ex5.component';
import { Ex6Component } from './ex2ndWeekRxJS/ex6/ex6.component';
import { Ex7Component } from './ex2ndWeekRxJS/ex7/ex7.component';

@NgModule({
  declarations: [
    AppComponent,
    ExCurrentNumberComponent,
    Ex1ndWeekRxJSComponent,
    Ex2ndWeekRxJSComponent,
    Ex1Component,
    Ex2Component,
    Ex3Component,
    Ex4Component,
    Ex5Component,
    Ex6Component,
    Ex7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
