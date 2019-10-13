function countSymbols(stringArg){
    const numberSymbols = {};

    for (let i = 0; i < stringArg.length; i++){
        if (stringArg[i] in numberSymbols){
            numberSymbols[stringArg[i]]++;
        }
        else{
            numberSymbols[stringArg[i]] = 1;
        }
    }

    for (key in numberSymbols){
        if (key in numberSymbols){
            console.log(key + ': ' + numberSymbols[key]);
        }
    }
}
module.exports = countSymbols;