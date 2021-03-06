/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
// Kacper Nadstoga Politechnika Poznańska Teleinformatyka 

// DOM elements
const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const inputs = [firstName, lastName, email];
const checkBoxes = document.querySelectorAll('input[type="checkbox"]');

// faculties which user chose
const faculties = [];

// flag to check all inputs 
let isFilled = false;
let passwordsMatch = false;
let checkBoxChoose = false;


// main function to check whole inputs
function processValidity(){
    checkValidity();
    checkPasswords();
    checkBoxesValidity();
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

function checkPasswords(){

    if(password1.value === '' || password2.value === ''){

        setErrorMessage(password1, password1.dataset.error);
        setErrorMessage(password2, password2.dataset.error);

    }else if(password1.value !== password2.value){

        setErrorMessage(password2, password2.dataset.error);

    }else{
        setSuccess(password1);
        setSuccess(password2);
        passwordsMatch = true;
    }
}

function checkBoxesValidity(){

    const checkGroup = document.querySelector('.checkbox__group');
    const message = checkGroup.querySelector('#checkboxInfo');
    
    // check all checkboxes
    checkBoxes.forEach( checkbox => {
        if(checkbox.checked){

            console.log(checkbox.value);
            faculties.push(checkbox.value);
            checkBoxChoose = true;

            if(message.classList.contains('error')){
                message.classList.remove('error');
            }
        }
    });

    if(!checkBoxChoose){

        message.classList.add('error'); 
        message.textContent = `${checkGroup.dataset.error}`;
    }
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



function setSuccess(input){

    const formGroup = input.parentElement;
    const message = formGroup.querySelector('small');

    if(formGroup.classList.contains('error')){
        formGroup.classList.remove('error');
    }
    formGroup.classList.add('success');
}

function ifRegistered(flag){

    const submitBtn = document.querySelector('button');
    if(flag){

        if(submitBtn.classList.contains('faield')){

            submitBtn.classList.remove('failed');
        }

        submitBtn.textContent = 'Pomyślnie zarejestrowano!';
        submitBtn.classList.add('registered');

    }else{
        
        if(submitBtn.classList.contains('registered')){
            submitBtn.classList.remove('registered');
        }

        submitBtn.textContent = 'Niepowodzenie!';
        submitBtn.classList.add('failed');

    }
}

// save user data as an object (without password)
function saveData(){
    const userData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        faculty: faculties
    }
    console.log(userData);
}

// run validation after content will load
window.addEventListener('DOMContentLoaded', ()=>{
    form.addEventListener('submit', e => {

        e.preventDefault();
    
        processValidity();
    
        // check all flags to confirm whole form
        if(isFilled && passwordsMatch && checkBoxChoose){
            saveData();
            ifRegistered(true);
            // send form if data are correct
            // e.target.submit();
        }else{
            ifRegistered(false);
            return false;
        }
    
    });
});



