function makeFirstSymbolUpperCase(stringArg){
    let firstLetter = stringArg.charAt(0).toUpperCase();
    let restLetters = stringArg.substr(1,stringArg.length - 1);
    return firstLetter + restLetters;
}
module.exports = makeFirstSymbolUpperCase;