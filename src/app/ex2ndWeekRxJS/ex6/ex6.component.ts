import { Component, OnInit } from '@angular/core';
import { filter, map, Subject } from 'rxjs';

@Component({
  selector: 'app-ex6',
  templateUrl: './ex6.component.html',
  styleUrls: ['./ex6.component.scss']
})
export class Ex6Component {
  public button1Click$: Subject<string> = new Subject<string>();
  public button2Click$: Subject<number> = new Subject<number>();

  public log: string[] = [];

  constructor() {
    // код пишем только тут в конструкторе
    this.button1Click$
      .pipe()
      .subscribe((value) => this.log.push(value.toString()));

    this.button2Click$
      .pipe(
        map((value) => value * 10),
        map((value, index) => value + index),
        filter(val => val % 2 === 0),
      )
      .subscribe((value) => this.log.push(value.toString()));
  }

  button1Click() {
    this.button1Click$.next(new Date().toISOString());
  }

  button2Click() {
    this.button2Click$.next(this._btn2Counter);
    this._btn2Counter += 2;
  }

  private _btn2Counter = 0;
}
