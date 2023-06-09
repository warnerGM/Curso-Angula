 import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/service/validators.service';
import { emailValidatorService } from 'src/app/shared/validators/email-validators.service';
// import * as customValidators from 'src/app/shared/validators/validators.function';


@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public myForm = this.fb.group({
    name: ['',[Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    // email: ['',[Validators.required,Validators.pattern(this.validatosrtService.emailPattern)],[new emailValidatorService()]],
    email: ['',[Validators.required,Validators.pattern(this.validatorsService.emailPattern)],[this.EmailValidatorService]],
    username:['',[Validators.required,this.validatorsService.canBestrider]],
    password:['',[Validators.required,Validators.minLength(6)]],
    password2:['',[Validators.required]],

  },{
    validators:[
      this.validatorsService.isFieldOneEqualTwo('password','password2' ),
    ]
  });

  constructor(
    private fb:FormBuilder,
    private validatorsService: ValidatorsService,
    private EmailValidatorService:emailValidatorService
    ){}

  isvalidField(field:string){
    return this.validatorsService.isvalidField(this.myForm,field)
  }
  onSubmit(){
    this.myForm.markAllAsTouched();
  }

}
