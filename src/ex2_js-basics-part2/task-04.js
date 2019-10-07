function isElementsEqual(elements) {
    for (let i = 1;i < elements.length;i++){
        if (elements[0] !== elements[i]){
            return false;
        }
    }
    return true;
}
module.exports = isElementsEqual;