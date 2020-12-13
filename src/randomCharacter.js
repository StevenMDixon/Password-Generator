const characterRanges = {
    alphaA: [65, 90],
    alphaN: [97, 122],
    numeric: [48, 57],
    special1: [33, 47],
    special2: [58, 64],
    special3: [92, 95],
    special4: [123, 126]
}

export function randomNumber(startofRange, endofRange){
    return (Math.floor(Math.random() * (endofRange) + startofRange))
}

export function generateRandomNumber(arrayofItems){
    const randomIndex = randomNumber(0, arrayofItems.length);
    return arrayofItems[randomIndex];
}

export function createRange([start, end]){
    return Array.from(new Array((end - start) + 1), (x, i) => start + i);
}

export function generateRandomCharacter(types){
    const optionsArray = types.reduce((acc, type) => {
        if(characterRanges[type]){
        acc= [...acc, ...createRange(characterRanges[type])];
        }
        return acc;
    }, []);
    return String.fromCharCode(generateRandomNumber(optionsArray));
}

export default generateRandomCharacter;