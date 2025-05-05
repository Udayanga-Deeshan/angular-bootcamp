import { Component, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {

  counter =signal(0);

  updateCounter(){
    this.counter.update(intialvalue => intialvalue+1)
  }

}
