import { validateForm } from "./validateForm";
import { copyPassword } from "./copyPassword";

export function buttonClick (evt) {
    
    validateForm();

}

export function copyClick (evt) {

    copyPassword();

}