import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,Validators} from '@angular/forms';

const rtx5090 ={
  name:'ETX 50990',
  price:2500,
  instorage:6,
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit {

  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0)
    
  // })

  public myForm:FormGroup= this.fb.group({
    name:['',[Validators.required ,Validators.minLength(3) ]],
    price: [0,[Validators.required ,Validators.min(3) ]],
    instorage: [0,[Validators.required, Validators.min(0)]],
  })

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    //this.myForm.reset(rtx5090)
  }

isvalidField(field:string):boolean |null {
  return this.myForm.controls[field].errors
  && this.myForm.controls[field].touched;
}

getFieldError(field:string):string | null{
if (!this.myForm.controls[field]) return null; 

const errors = this.myForm.controls[field].errors || {};

for (const key of Object.keys(errors)) {
  switch(key){
case 'required':
  return 'este campo es requerido';
  case 'minlength':
    return `Minimo ${errors['minlength'].requiredLength} caracters`
  }
}

return null;
  

}

  onSave():void{
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset({price:0, instorage:0});
  }
}
