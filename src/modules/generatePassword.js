export function generatePassword(){

    const passLength = document.getElementById('p-length').value
    const pass = document.getElementById('password');
    
    const number = document.getElementById('number');
    const upper = document.getElementById('upper');
    const lower = document.getElementById('lower');
    const symbol = document.getElementById('symbol');

    let numbers = '0123456789'
    let charUp = 'ABCDEFGHIJKLMNOPQRSTUVYXWZ'
    let charLo = 'abcdefghijklmnopqrstuvyxwz'
    let symbols = '!@#$%&*<>?+-*'
    let password = '';

    for (let i = 0; i < passLength; i+=1) {
        if (number.checked) {
            password += numbers.charAt(Math.floor(Math.random()*numbers.length)) ;
        }
        if (upper.checked) {
            password += charUp.charAt(Math.floor(Math.random()*charUp.length)) ;
        }
        if (lower.checked) {
            password += charLo.charAt(Math.floor(Math.random()*charLo.length)) ;
        }
        if (symbol.checked) {
            password += symbols.charAt(Math.floor(Math.random()*symbols.length)) ;
        }
    }
    password = password.substring(0, passLength)
    pass.innerHTML = password;

}
