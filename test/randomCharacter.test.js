import randomCharacter from '../src/randomCharacter';
import {createRange, generateRandomNumber, randomNumber} from '../src/randomCharacter';
/*

    randomCharacter is a function that: 
    1. returns a single character string
    2. accept criteria for what characters should be included
    3. 

    lowercase, uppercase, numeric, and/or special characters
    function randomCharacter(useAlphal, useAlphau, useNumber, useSpecial)
    
*/

test('createRange creates an array of n length', () => {
    expect(createRange([0,2]).length).toBe(3);
});

test('randomCharacter is a function', () => {
    expect(typeof randomCharacter).toBe('function');
});

test('randomCharacter returns a string', () => {
    expect(typeof randomCharacter(['alphaA'])).toBe('string');
});

test('randomCharacter returns a single character', () => {
    expect(randomCharacter(['alphaA']).length).toBe(1);
});

test('generateRandomNumber returns random number from function', () => {
    expect(generateRandomNumber([1,1, 1, 1])).toBe(1);
});

test('randomNumber generates numbers between start and end range', ()=> {
    let max = 0;
    let startNumber = 0;
    let endNumber = 10;

    for(let i = 0; i < 1000; i++){
        let x = randomNumber(startNumber, endNumber);
        if(x > max){
            max = x;
        }
    }

    expect(max <= endNumber).toBe(true);

})