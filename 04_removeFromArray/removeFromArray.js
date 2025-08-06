const removeFromArray = function(initArray, ...removedElements) {
  // find removed element
  for(let element of removedElements) {
    initArray = initArray.filter((a) => a !== element);
  }
  return(initArray);
};

// Do not edit below this line
module.exports = removeFromArray;
