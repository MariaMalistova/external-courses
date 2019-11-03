function sliceLike(array, begin = 0, end = array.length + 1){
    const newArray = [];
    let newBegin = begin, newEnd = end;
    if (newBegin < 0){
        newBegin = array.length + newBegin;
    }

    if (newEnd < 0){
        newEnd = array.length + newEnd;
    }

    for (let i = newBegin; i < newEnd; i++){
      if (i <= array.length - 1){
        newArray.push(array[i]);
      }
    }
    return newArray;
}
module.exports = sliceLike;