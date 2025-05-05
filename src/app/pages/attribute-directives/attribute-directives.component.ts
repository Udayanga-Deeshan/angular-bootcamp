import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.css'
})
export class AttributeDirectivesComponent {

  txtColor:string=""

  isGreen:boolean =false

  onChange(color:string){
    this.txtColor=color
  }

  initialColor:string ="orange"

  updateColor(uColor:string){
      this.initialColor =uColor
  }

}
