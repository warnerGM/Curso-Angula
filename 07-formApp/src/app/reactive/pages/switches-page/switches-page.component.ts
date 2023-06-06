import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  
})
export class SwitchesPageComponent implements OnInit {


  public myForm: FormGroup = this.fb.group({
    gender:['',Validators.required],
    wantNotifications: [false, Validators.required],
    termsAndConditions:[false, Validators.requiredTrue],
  });

  public person ={
    geder:'F',
    wantNotifications:false,
  }



  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
   this.myForm.reset(this.person)
  }


  isvalidField(field:string):boolean |null {
    return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched;
  }
  
  

  onSave(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    this.person = this.myForm.value;
    console.log(this.myForm.value);
    this.myForm.reset();

    
    console.log(this.person);
  }
}
