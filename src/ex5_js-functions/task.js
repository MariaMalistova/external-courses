const Calculator = (function(){
    let currentValue = 0;
    function add(value = 0){
        currentValue += value;      
        return add;
    }
  
    add.toString = function(){
        return currentValue;
    } 
  
    function subtract(value = 0){
        currentValue -= value;      
        return subtract;
    }

    subtract.toString = function(){
        return currentValue;
    }
  
    function divide(value = 1){
        currentValue /= value;      
        return divide;
    }

    divide.toString = function(){
        return currentValue;
    }

    function multiply(value = 1){
        currentValue *= value;      
        return multiply;
    }

    multiply.toString = function(){
        return currentValue;
    }
  
    function getResult(){
        return currentValue;
    }

    function reset(){
        currentValue = 0;
        return currentValue;
    }

    return {add, subtract, divide, multiply, getResult, reset}
  }())
  module.exports = Calculator;