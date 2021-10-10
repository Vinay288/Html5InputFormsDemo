const NAME_REGEX = RegExp('^[A-Z]{1}[a-z]{2,}$');
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