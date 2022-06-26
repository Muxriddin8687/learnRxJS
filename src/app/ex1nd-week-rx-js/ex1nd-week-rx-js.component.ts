import { Component } from '@angular/core';
import { distinctUntilChanged, Subject, takeUntil, take } from 'rxjs';

@Component({
  selector: 'app-ex1nd-week-rx-js',
  templateUrl: './ex1nd-week-rx-js.component.html',
  styleUrls: ['./ex1nd-week-rx-js.component.scss']
})
export class Ex1ndWeekRxJSComponent{

  public button1Click$: Subject<number> = new Subject<number>();
  public button2Click$: Subject<{a: number, b: number}> = new Subject<{a: number, b: number}>();
  public button3Click$: Subject<string> = new Subject<string>();
  public button4Click$: Subject<number> = new Subject<number>();
  public log: string[] = [];

  constructor() {
    this.button1Click$
      .pipe(
        take(5),
        distinctUntilChanged()
        )
      .subscribe((value) => this.log.push(String(value)));


    this.button2Click$
      .pipe(distinctUntilChanged((prev, cur) => prev.a === cur.a || prev.b === cur.b))
      .subscribe((value) => this.log.push(JSON.stringify(value)));


    this.button3Click$
      .pipe(takeUntil(this.button4Click$))
      .subscribe((value) => this.log.push(value.toString()));


    this.button4Click$
      .pipe(take(3))
      .subscribe((value) => this.log.push(value.toString()));

  }


  button1Click() {
    this.button1Click$.next(this._btn1Array[this._btn1CurrentIndex]);
    this._btn1CurrentIndex++;
    if (this._btn1Array.length < this._btn1CurrentIndex + 1) {
      this.button1Click$.complete();
    }
  }


  button2Click() {
    this.button2Click$.next(this._btn2Array[this._btn2CurrentIndex]);
    this._btn2CurrentIndex++;
    if (this._btn2Array.length < this._btn2CurrentIndex + 1) {
      this.button2Click$.complete();
    }
  }


  button3Click() {
    this.button3Click$.next(new Date().toISOString());
  }


  button4Click() {
    this.button4Click$.next(this._btn4Counter);
    this._btn4Counter += 1;
  }


  private _btn1Array = [1, 2, 4, 4, 13, 13, 13, 4, 4, 3, 2, 5];
  private _btn1CurrentIndex = 0;


  private _btn2Array =
  [
    {a: 1, b: 4},
    {a: 3, b: 7},
    {a: 34, b: 9},
    {a: 34, b: 9},
    {a: 56, b: 11},
    {b: 11, a: 56},
    {a: 1, b: 4}
  ];
  private _btn2CurrentIndex = 0;


  private _btn4Counter = 0;

}
