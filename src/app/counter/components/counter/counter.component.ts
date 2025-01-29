import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter:{{ counter }}</h3>

<button (click)="increaseBy(+1)">+1</button>
<button (click)="ResetCounter()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {

  public counter: number = 10;

  increaseBy (Value: number): void{
    this.counter +=Value;
  }

  ResetCounter(){
    this.counter = 10;
  }

}
