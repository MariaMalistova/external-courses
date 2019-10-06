function isProtoPropertyExists(property, object){
    let propertyValue;
    for (let key in object){
        if (!object.hasOwnProperty(key) && key === property){
            propertyValue = object[key];
        }
    }
    return propertyValue;
}
module.exports = isProtoPropertyExists;