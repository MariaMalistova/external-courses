function keysValuesList(objectArg){
    for (let key in objectArg){
        if (key in objectArg){
            console.log(key + ': ' + objectArg[key]);
        }
    }
}
module.exports = keysValuesList;