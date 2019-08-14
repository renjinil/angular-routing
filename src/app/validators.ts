
import {AbstractControl} from '@angular/forms';
// import RegExp from "typescript-dotnet-commonjs/System/Text/RegularExpressions";

export function phoneNumberValidator(control : AbstractControl){
    
    if(control.value && (control.value !== null || control.value !== undefined)){
     
        const regex = new RegExp("^[6-9]\d{9}$");
        console.log(regex.test(control.value))
        if(!regex.test(control.value)){
            return{
                isError:true
            }

        }
    }
return null;
}