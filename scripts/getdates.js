const year = document.querySelector("#currentyear");

const currentYear = new Date().getFullYear();

year.textContent = currentYear;

const lastModifiedDate = new Date(document.lastModified);

const lastModifiedElement = document.querySelector("#lastModified");

const formattedDate = lastModifiedDate.toLocaleDateString('en-US');

const formattedTime = lastModifiedDate.toLocaleTimeString('en-US', { hour12: false });

lastModifiedElement.textContent = `Last Modification: ${formattedDate} ${formattedTime}`;


// header navigation code

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', ()=> {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});