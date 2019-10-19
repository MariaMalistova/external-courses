function firstLettersUpperCase(stringArg){
    let words = stringArg.split(' ');
    let resultString = '';
    for (let i = 0; i < words.length;i++){
        let firstLetter = words[i].charAt(0).toUpperCase();
        let restLetters = words[i].substr(1,words[i].length - 1);
        words[i] = firstLetter + restLetters;
        resultString += words[i] + ' ';
    }

    resultString = resultString.trimRight();

    return resultString;
}
module.exports = firstLettersUpperCase;