function getType(value) {
    let result;
    const valueType = typeof value;
    if (valueType === 'string' || !isNaN(value) && valueType === 'number'){
        result = valueType;
    }
    return result;
}
module.exports = getType;