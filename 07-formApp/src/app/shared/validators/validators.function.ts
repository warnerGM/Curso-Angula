import { FormControl, ValidationErrors } from "@angular/forms";


export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const canBestrider = (control:FormControl):ValidationErrors|null=>{
    const Value:string = control.value.trim().toLowerCase();

    if(Value === 'strider'){
        return {
        noStrider: true,
        }
    }
    return null;
}