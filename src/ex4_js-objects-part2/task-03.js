function deleteFirstLastSpaces(stringArg){
    if (stringArg[0] === ' ' && stringArg[stringArg.length-1] === ' '){
        stringTrim = '';

        for (let i = 1;i < stringArg.length-1;i++){
            stringTrim += stringArg[i];
        }

    }

    return stringTrim;
}
module.exports = deleteFirstLastSpaces;