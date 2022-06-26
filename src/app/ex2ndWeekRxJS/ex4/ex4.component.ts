import { Component } from '@angular/core';
import { map, reduce, Subject, take } from 'rxjs';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.scss']
})
export class Ex4Component {
  public button1Click$: Subject<number> = new Subject<number>();
  public button2Click$: Subject<number> = new Subject<number>();

  public log: string[] = [];

  constructor() {
    // код пишем только тут в конструкторе
    this.button1Click$
    .pipe(
      take(4),
      map((value) => value * 10),
      map((value, index) => value + index),
      reduce((a: number,b: number) => a+b, 0)
    )
    .subscribe((value) => this.log.push(value.toString()));

    this.button2Click$
      .pipe(
        take(4),
        map((value) => value * 10),
        map((value, index) => value + index),
      )
      .subscribe((value) => this.log.push(value.toString()));
  }

  button1Click() {
    this.button1Click$.next(this._btn1Counter);
    this._btn1Counter++;
  }

  button2Click() {
    this.button2Click$.next(this._btn2Counter);
    this._btn2Counter++;
  }

  private _btn1Counter = 0;
  private _btn2Counter = 0;
}
