import {generatePassword} from './generatePassword'

export function validateForm() {

    const number = document.getElementById('number');
    const upper = document.getElementById('upper');
    const lower = document.getElementById('lower');
    const symbol = document.getElementById('symbol');

    const passLength = document.getElementById('p-length').value
    const pass = document.getElementById('password');
    if (passLength === ""){
        pass.innerHTML = "Inform the password length.";
    }
    if (passLength > 0) {
        if (number.checked === false && upper.checked === false
            && lower.checked === false && symbol.checked === false) {
            pass.innerHTML = "Select at least one criteria!";
        }else{
            generatePassword();
        }
    }

};


