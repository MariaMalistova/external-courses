const getMaxElement = function(elements) {
    let maxElement = elements[0];
    for (let i = 1;i < elements.length;i++)
    {
        if (elements[i] > maxElement)
        {
            maxElement = elements[i];
        }
    }
    return maxElement;
}
module.exports = getMaxElement;