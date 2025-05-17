import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../model/user';
import { JsonPipe } from '@angular/common';
import { first } from 'rxjs';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule,JsonPipe],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
  
  user:User ={};

  onSubmit(userForm:NgForm){
      console.log(userForm.value);
      
  }

  setValues(userForm:NgForm){
      let obj ={
        firstName:"Teena",
        lastName:"judith"
      }

      userForm.control.patchValue(obj)
  }

  resetData(userForm:NgForm){
      userForm.reset()
  }

}
