import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
})
export class CounterComponent {
  constructor() {}
  public counter: number = 10;

  public fnCounter(value: number): void {
    this.counter = value === 10 ? value : (this.counter += value);
  }
}
