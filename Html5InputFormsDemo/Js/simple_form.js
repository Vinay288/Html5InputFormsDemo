const NAME_REGEX = RegExp('^[A-Z]{1}[a-z]{2,}$');
const EMAIL_REGEX = RegExp("^[a-z]+[+._-]?[a-z0-9]+[@][a-z0-9]+[.][a-z]([.][a-z]+)?$");
const PHONE_NUMBER_REGEX = RegExp("^[0-9]{2}[ ][0-9]{10}$");
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function () {
    if (NAME_REGEX.test(text.value)) 
    {
        textError.textContent = "";
    }
    else 
    {
        textError.textContent = "Name is Incorrect";
    }
});
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function () 
    {
    if (EMAIL_REGEX.test(email.value)) {
        emailError.textContent = "";
    }
    else 
    {
        emailError.textContent = "Email is Incorrect";
    }
});
const telephoneNumber = document.querySelector('#tel');
const telephoneNumberError = document.querySelector('.tel-error');
telephoneNumber.addEventListener('input', function () {
    if (PHONE_NUMBER_PATTERN.test(telephoneNumber.value)) 
    {
        telephoneNumberError.textContent = "";
    }
    else 
    {
        telephoneNumberError.textContent = "telephone number is Incorrect";
    }
});