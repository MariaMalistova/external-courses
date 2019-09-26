const countEvenOddZero = function(elements) {
    let numberEvenOddZero =[0,0,0];
    for (let i = 0;i < elements.length;i++)
    {
        let currentElement = elements[i];
        if (typeof currentElement === 'number')
        {
            if (currentElement === 0)
            {
                numberEvenOddZero[2]++;
            } 
            else if (currentElement % 2 === 0)
            {
                numberEvenOddZero[0]++;
            }
            else if (!isNaN(currentElement % 2))
            {
                numberEvenOddZero[1]++;
            }
        }
    }
    console.log(numberEvenOddZero);
    return numberEvenOddZero;
}
module.exports = countEvenOddZero;