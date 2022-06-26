import { Component, OnInit } from '@angular/core';
import { audit, interval, map, Subject, throttle, throttleTime } from 'rxjs';

@Component({
  selector: 'app-ex7',
  templateUrl: './ex7.component.html',
  styleUrls: ['./ex7.component.scss']
})
export class Ex7Component {
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
        // throttleTime(2000)
        // throttle(val => interval(2000))
        audit(ev => interval(2000))
      )
      .subscribe((value) => this.log.push(value.toString()));
  }

  button1Click() {
    this.button1Click$.next(new Date().toISOString());
  }

  button2Click() {
    this.button2Click$.next(this._btn2Counter);
    this._btn2Counter++;
  }

  private _btn2Counter = 0;
}
