export function copyPassword() {

    const pass = document.querySelector('#password');
    let password;
    if (pass.innerHTML === "Inform the password length." ||
        pass.innerHTML === "Select at least one criteria!" ||
        pass.innerHTML === ""||
        pass.innerHTML === "Nothing to copy!") {
        pass.innerHTML = "Nothing to copy!"
    } else {
        navigator.clipboard.writeText(pass.innerHTML);
    }

}

