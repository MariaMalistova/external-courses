function findSubstring(stringArg, subStringArg){
    let isSubstringExists = false;
    if (stringArg.indexOf(subStringArg) !== -1){
        isSubstringExists = true;
    }

    return isSubstringExists;
}
module.exports = findSubstring;