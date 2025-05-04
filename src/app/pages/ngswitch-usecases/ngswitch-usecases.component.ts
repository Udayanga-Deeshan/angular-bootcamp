import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch-usecases',
  imports: [CommonModule],
  templateUrl: './ngswitch-usecases.component.html',
  styleUrl: './ngswitch-usecases.component.css'
})
export class NgswitchUsecasesComponent {

  grade:number =0;

  checkResult(x:number){
    this.grade =x
  }

}
