function insertString(stringOrigin, stringAdditional, wordNumber){
    let words = stringOrigin.split(' ');
    let resultString = '';

    for (let i = 0; i < words.length;i++){
        resultString += words[i] + ' ';

        if (i === wordNumber){
            resultString += stringAdditional + ' ';
        }
    }

    resultString = resultString.trimRight();

    return resultString;
}
module.exports = insertString;