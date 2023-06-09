import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ValidatorsService {
    public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
    public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  public canBestrider = (control:FormControl):ValidationErrors|null=>{
        const Value:string = control.value.trim().toLowerCase();
    
        if(Value === 'strider'){
            return {
            noStrider: true,
            }
        }
        return null;
    }

    public isvalidField( form:FormGroup, field:string){
        return form.controls[field].errors && form.controls[field].touched;
    }

   public isFieldOneEqualTwo(field1:string,field2:string){

        return (formgroup:AbstractControl):ValidationErrors|null =>{
            const fieldValue1 = formgroup.get(field1)?.value;
            const fieldValue2 = formgroup.get(field2)?.value;

            if(fieldValue1 !== fieldValue2){
                formgroup.get(field2)?.setErrors({noEqual:true});
                return {noEqual:true}
            }
            formgroup.get(field2)?.setErrors(null);
            return null;
        }
    }
    
}