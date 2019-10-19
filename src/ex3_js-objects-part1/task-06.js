function deepCopyObject(objectArg){
    const newObject = {};

    for (let key in objectArg){
        if (objectArg[key] !== null && typeof objectArg[key] === 'object'){
            if (Array.isArray(objectArg[key])){
                newObject[key] = [];

                for (let i = 0; i < objectArg[key].length; i++){
                    newObject[key][i] = deepCopyObject(objectArg[key][i]);
                }
            }
            else{
                newObject[key] = deepCopyObject(objectArg[key]);
            }
        }
        else{
          newObject[key] = objectArg[key];  
        }
    }

    return newObject;
}
module.exports = deepCopyObject;