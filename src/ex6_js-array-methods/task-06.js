function reduceLike(array, callback, initialValue){
    let previousValue, result, startValue = 0;
    if (initialValue !== undefined){
        previousValue = initialValue;
    }
    else{
        previousValue = array[0];
        startValue = 1;
    }
    for (let i = startValue; i < array.length; i++){
        result = callback(previousValue, array[i], i, array);
        previousValue = result;
    }
    return result;
}
module.exports = reduceLike;