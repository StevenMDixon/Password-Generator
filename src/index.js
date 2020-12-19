import './index.css';
import generateRandomCharacter from './randomCharacter';

/*
    Steps:
    Ask the user criteria questions
    Store criteria in variables
    generate password
*/
// store options here
const options = {
    uppercase: false,
    lowercase: false,
    numeric: false,
    special: false
};

// function used to generate password using a for loop
function generatePassWord(characters, lengthofPassword){
    let password = '';
    for(let i = 0; i < lengthofPassword; i++){
        password += generateRandomCharacter(characters);
    }
    return password;
};

// set password in the DOM
function assignPassword(password){
    document.getElementById('password-output').textContent = password;
}

//get list of character types for random generator
function getCharactersNeed(options){
    const charactersNeeded = [];
    for(let [v, k] of Object.entries(options)){
        if(k) charactersNeeded.push(v) 
    }
    return charactersNeeded;
}

function handleGeneratePasswordClick(e){
    let PasswordLength =  document.getElementById("passWordLength").value
    let password = generatePassWord(getCharactersNeed(options), PasswordLength)
    assignPassword(password);
}

function handleOptionClick(e){
    if(this.dataset.toggleType){
        options[this.dataset.toggleType] = this.checked

    }else {
        // handle error
    }
}

document.addEventListener('DOMContentLoaded', () => {

    // add an event listener to the page to listen for a click on the password generate button
    document.getElementById('password-generator-button').addEventListener('click', handleGeneratePasswordClick);

    const optionButtons = document.getElementsByClassName('option');

    for(let i = 0; i < optionButtons.length; i++){
        optionButtons[i].addEventListener('click', handleOptionClick)
    }

})
