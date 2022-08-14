const throttle = require('lodash.throttle');

const LOCAL_STORAGE_KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form');
const formData = {};

form.addEventListener('input', throttle(onFormInput, 200));
form.addEventListener('submit', onFormSubmit);

populateteInput();

function onFormInput(e) {
    const { email, message } = form.elements;
    
    formData[email.name] = email.value;
    formData[message.name] = message.value;
    
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(e) {
    e.preventDefault();

    const { email, message } = form.elements;
    
    formData[email.name] = email.value;
    formData[message.name] = message.value;
    
    localStorage.removeItem(LOCAL_STORAGE_KEY);

    form.reset();
};

function populateteInput() {
    savedInputInfo = localStorage.getItem(LOCAL_STORAGE_KEY);
    
    if (savedInputInfo) {
    const inputParse = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    form.elements.email.value = inputParse.email;
    form.elements.message.value = inputParse.message;
    };
};
