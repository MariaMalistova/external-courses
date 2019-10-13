function roundThirdSymbol(firstNumber, secondNumber){
    return Math.round((firstNumber + secondNumber) * 1000) / 1000;
}
module.exports = roundThirdSymbol;