function makeStringCamelCase(stringArg){
    let words = stringArg.split(' ');
    let resultString = words[0].toLowerCase();
    
    for (let i = 1; i < words.length;i++){
        let firstLetter = words[i].charAt(0).toUpperCase();
        let restLetters = words[i].substr(1,words[i].length - 1).toLowerCase();
        words[i] = firstLetter + restLetters;
        resultString += words[i];
    }

    return resultString;
}
module.exports = makeStringCamelCase;