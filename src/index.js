import './index.css';
import generateRandomCharacter from './randomCharacter';

/*
    Steps:
    Ask the user criteria questions
    Store criteria in variables
    generate password
*/

let charactersNeeded = ['alphaN', 'alphaA', 'numeric'];
let passwordLength = 10;

// function used to generate password using a for loop
function generatePassWord(characters, lengthofPassword){
    let password = '';
    for(let i = 0; i < lengthofPassword; i++){
        password += generateRandomCharacter(characters);
    }
    return password;
};



// add an event listener to the page to listen for a click on the password generate button
document.getElementById('password-generator-button').addEventListener('click', ()=>{
    document.getElementById('password-output').textContent = generatePassWord(charactersNeeded, passwordLength);
})