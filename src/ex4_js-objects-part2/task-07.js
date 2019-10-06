function cutString(stringArg, numberArg){
    let resultString = stringArg;
    if (stringArg.length > numberArg){
        resultString = stringArg.substr(0,numberArg - 1) + '…';
    }
    return resultString;
}
module.exports = cutString;