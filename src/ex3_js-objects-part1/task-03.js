function isPropertyExists(stringArg, objectArg){
    let result;
    if (stringArg in objectArg){
        result = true;
    }
    else {
        result = false;
    }
    return result;
}
module.exports = isPropertyExists;