function addPropertyIfNotExists(stringArg, objectArg){
    const objectParam = objectArg;
    if (!(stringArg in objectParam)){
        objectParam[stringArg] = 'new';
    }
    return objectArg;
}
module.exports = addPropertyIfNotExists;