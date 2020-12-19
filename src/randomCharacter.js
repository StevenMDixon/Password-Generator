export const characterRanges = {
    uppercase: [65, 90],
    lowercase: [97, 122],
    numeric: [48, 57],
    special: [[33, 47],[58, 64], [92, 95], [123, 126]]
}


export function randomNumber(startofRange, endofRange){
    return (Math.floor(Math.random() * (endofRange) + startofRange))
}

export function generateRandomNumber(arrayofItems){
    const randomIndex = randomNumber(0, arrayofItems.length);
    return arrayofItems[randomIndex];
}

export function createRange(ranges){
    if(Array.isArray(ranges[0])) {
        return ranges.reduce((acc, range)=> {
            let [start, end] = range;
            acc = [...acc, ...Array.from(new Array((end - start) + 1), (x, i) => start + i)];
            return acc;
        }, []);
    } else {
        let [start, end] = ranges;
        return Array.from(new Array((end - start) + 1), (x, i) => start + i);
    }
    
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