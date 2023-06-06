import { FormControl } from "@angular/forms";




export const canBestrider = (control:FormControl)=>{
    const Value:string = control.value.trim().lowercase();

    if(Value === 'strider'){
        return {
        noStrider: true,
        }
    }
    return null;
}