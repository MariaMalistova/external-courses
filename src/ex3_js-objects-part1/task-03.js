function isPropertyExists(stringArg, objectArg){
    if (stringArg in objectArg){
        return true;
    }
    return false;
}
module.exports = isPropertyExists;