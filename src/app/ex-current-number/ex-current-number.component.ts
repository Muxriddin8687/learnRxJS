import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ex-current-number',
  templateUrl: './ex-current-number.component.html',
  styleUrls: ['./ex-current-number.component.scss']
})
export class ExCurrentNumberComponent {

  counter = 0;
  trueOrFalse = new Observable();

  addPlusCurrentNumber(): void{
  }

}
