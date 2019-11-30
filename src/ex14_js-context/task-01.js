const Calculator = (function(){
    let currentValue = 0;
    function add(value = 0){
        currentValue += value;      
        return this;
    }
  
    function subtract(value = 0){
        currentValue -= value;      
        return this;
    }
  
    function divide(value = 1){
        currentValue /= value;      
        return this;
    }

    function multiply(value = 1){
        currentValue *= value;      
        return this;
    }
  
    function getResult(){
        return currentValue;
    }

    function reset(){
        currentValue = 0;
        return this;
    }

    function setState(state = 0){
        currentValue = state;
        return this;
    }
    
    function fetchData(callback){
        setTimeout(() => { callback(500) }, 2000);
    }

    return {add, subtract, divide, multiply, getResult, reset, setState, fetchData}
  }())
  module.exports = Calculator;