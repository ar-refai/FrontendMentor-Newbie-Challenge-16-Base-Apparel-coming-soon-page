const form = document.querySelector(".form");
const submit = document.querySelector(".email");

function validateEmail(e) {
    const email = e.target.querySelector("[type ='email']").value;
    
    ///////////////////////////
    // regular ex for the email
    ///////////////////////////
    
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    ///////////////////////////
    // email validation
    ///////////////////////////

    if (!regEx.test(String(email).toLowerCase())){
        e.preventDefault();
        document.querySelector(".email").classList.add("error");
        document.querySelector(".email-error-message").classList.add("show");
        document.querySelector(".error-icon").classList.add("show");
    }
}
form.addEventListener('submit',validateEmail);
