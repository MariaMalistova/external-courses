function reverseString(stringOrigin){
    let reversedString = '';
    for (let i = stringOrigin.length - 1; i >= 0; i--){
        reversedString += stringOrigin[i];
    }
    return reversedString;
}
module.exports = reverseString;