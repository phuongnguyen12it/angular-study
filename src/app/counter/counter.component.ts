import { Component } from '@angular/core';

let _count = 1;

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count = _count + 1;
}
