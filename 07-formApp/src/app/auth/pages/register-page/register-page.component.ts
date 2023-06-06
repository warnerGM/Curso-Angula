 import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { canBestrider } from 'src/app/shared/validators/validators.function';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public myForm = this.fb.group({
    name: ['',[Validators.required]],
    email: ['',[Validators.required]],
    username:['',[Validators.required,canBestrider]],
    password:['',[Validators.required,Validators.minLength(6)]],
    password2:['',[Validators.required]],

  })

  constructor(private fb:FormBuilder){}

  isvalidField(field:string){
    // TODO: obtener validacion desde un servicio
  }
  onSubmit(){
    this.myForm.markAllAsTouched();
  }

}
