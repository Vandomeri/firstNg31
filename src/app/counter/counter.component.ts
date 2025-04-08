import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count: number = 0

  increment() {
    this.count = this.count + 1
  }

  decrement() {
    this.count = this.count - 1
  }


  newCount = signal<number>(0)

  newIncrement() {
    this.newCount.set(this.newCount() + 1)
  }

  newDecrement() {
    this.newCount.set(this.newCount() - 1)
  }

}
