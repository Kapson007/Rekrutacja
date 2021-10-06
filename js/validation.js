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
// const messageContainer = document.querySelector('.message-container');
// const message = document.getElementById('message');
const inputs = [firstName, lastName, email, password1, password2];

let isValid = false;
let passwordMatch = false;

function validation(e){
    // let errorsContainer = [];
    

    // inputs.forEach(el => el.addEventListener('input', e => errorTag(e.target, !e.target.checkValidity())));
    
    // console.log('hello from validate function!');

    // // name
    // if(!name.checkValidity()){
    //     errorsContainer.push('Pole z imieniem jest nieprawidłowo wypełnione');
        
    // }
    // // last name
    // if(!lastName.checkValidity()){
    //     errorsContainer.push('Pole z imieniem jest nieprawidłowo wypełnione');
    // }
    // if(!email.checkValidity()){
    //     errorsContainer.push("Pole z adresem email jest nieprawidłowo wypełnione");
    // }
    
    // return true;

    isValid = form.checkValidity();

    if(!isValid){
        const messageContainer = document.createElement('small');
        messageContainer.textContent = 'Please fill out ald fields';
        messageContainer.classList.add('error');
        messageContainer.style.borderColor = 'red';
        firstName.after(messageContainer);
        return;
    }
    if(password1.value === password2.value){
        passwordMatch = true;
        password1.style.borderColor = 'green';
        password2.style.borderColor = 'green';

    }else{
        passwordMatch = false;
        const messageContainer = document.createElement('small');
        messageContainer.textContent = 'Make sure passwords match';
        messageContainer.classList.add('error');
        messageContainer.style.borderColor = 'red';
        return;
    }

    if(passwordMatch && isValid){
        const messageContainer = document.createElement('small');
        messageContainer.textContent = 'successfully registered';
        messageContainer.classList.add('success');
    }


}

function storeFormData(){
    const data = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        password: form.password.value
    }
    console.log(data);
}






function proccessForm(event){
    event.preventDefault();


    validation();
    if(password1.value === password2.value){
        storeFormData();
    }

    console.log('hello from processForm');
}

// Run validation after DOM load on page
window.addEventListener('DOMContentLoaded', ()=>{
    form.addEventListener('submit', proccessForm);
});