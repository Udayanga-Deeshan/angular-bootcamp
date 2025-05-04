import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [CommonModule,FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  ischecked:boolean =false
  isHidden:boolean =true
  isSame:boolean = false
  input1:string=""
  input2:string=""


  onSubmit(){
    this.ischecked = !this.ischecked
  }

  onSave(){
    this.isHidden=true
  }

  onHide(){
    this.isHidden =false
  }

  onchange(){
    
  }

}
