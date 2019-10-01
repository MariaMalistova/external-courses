function copyObject(objectArg){
    const newObject = {};

    for (let key in objectArg){
        if (key in objectArg){
           newObject[key] = objectArg[key]; 
        }
    }

    return newObject;
}
module.exports = copyObject;