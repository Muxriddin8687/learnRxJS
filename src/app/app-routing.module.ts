import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExCurrentNumberComponent } from './ex-current-number/ex-current-number.component';
import { Ex1ndWeekRxJSComponent } from './ex1nd-week-rx-js/ex1nd-week-rx-js.component';
import { Ex1Component } from './ex2ndWeekRxJS/ex1/ex1.component';
import { Ex2Component } from './ex2ndWeekRxJS/ex2/ex2.component';
import { Ex2ndWeekRxJSComponent } from './ex2ndWeekRxJS/ex2ndWeekRxJS.component';
import { Ex3Component } from './ex2ndWeekRxJS/ex3/ex3.component';
import { Ex4Component } from './ex2ndWeekRxJS/ex4/ex4.component';
import { Ex5Component } from './ex2ndWeekRxJS/ex5/ex5.component';
import { Ex6Component } from './ex2ndWeekRxJS/ex6/ex6.component';
import { Ex7Component } from './ex2ndWeekRxJS/ex7/ex7.component';

const routes: Routes = [
  { path: 'currentNumber', component: ExCurrentNumberComponent },
  { path: 'ex1stWeekRxJS', component: Ex1ndWeekRxJSComponent },
  { path: 'ex2stWeekRxJS', component: Ex2ndWeekRxJSComponent,
    children: [
      { path: 'ex1', component: Ex1Component },
      { path: 'ex2', component: Ex2Component },
      { path: 'ex3', component: Ex3Component },
      { path: 'ex4', component: Ex4Component },
      { path: 'ex5', component: Ex5Component },
      { path: 'ex6', component: Ex6Component },
      { path: 'ex7', component: Ex7Component },
      { path: '', component: Ex1Component, pathMatch: 'full'},
      { path: '**', redirectTo: 'ex1'},
    ]
  },
  { path: '', component: ExCurrentNumberComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
