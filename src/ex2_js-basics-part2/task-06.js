const isPrimeNumber = function(value) {
    let result;
    if (typeof value === 'number' && value >= 0 && value <= 1000)
    {
        if (value < 2)
        {
            result = 'Число ' + value + ' - не простое и не составное число';
            console.log(result);
        }
        else 
        {
            for (let divisor = 2;divisor < value-1;divisor++)
            {
                if (value % divisor === 0)
                {
                    result = 'Число ' + value + ' - составное число';
                    console.log(result);
                    return result;
                }
            }
            result = 'Число ' + value + ' - простое число';
            console.log(result);
        }
    }
    else
    {
        result = 'Данные неверны';
        console.log(result);
    }
    return result;
}
module.exports = isPrimeNumber;