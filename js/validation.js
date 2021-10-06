/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/


const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const inputs = [firstName, lastName, email];
// flag to check all inputs 
let isFilled = false;
let passwordsMatch = false;

function processValidity(){
    checkValidity();
    checkPasswords();
}



function checkValidity(){
    inputs.forEach(toCheck => {
        if(toCheck.value === ''){
            setErrorMessage(toCheck);
        }else if(!toCheck.checkValidity()){
            setErrorMessage(toCheck, toCheck.dataset.error);
        }else{
            setSuccess(toCheck);
        }
    });
    isFilled = form.checkValidity();
}

function setErrorMessage(input, info="To pole nie moze być puste!"){
    const formGroup = input.parentElement;
    const message = formGroup.querySelector('small');
    console.log(input.dataset.error);
    message.textContent = `${info}`;
    if(formGroup.classList.contains('success')){
        formGroup.classList.remove('success');
    }

    formGroup.classList.add('error');
}

function checkPasswords(){
    
}

function setSuccess(input){
    const formGroup = input.parentElement;
    const message = formGroup.querySelector('small');
    if(formGroup.classList.contains('error')){
        formGroup.classList.remove('error');
    }
    formGroup.classList.add('success');
}

form.addEventListener('submit', e => {
    e.preventDefault();

    processValidity();

});


