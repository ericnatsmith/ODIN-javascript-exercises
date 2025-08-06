const sumAll = function(start,end) {
  let sum = 0;
  if(typeof start !== 'number' | typeof end !== 'number') {
    return 'ERROR';
  }
  if(start < 0 | end < 0) {
    return 'ERROR';
  }

  if(start % 1 !== 0 | end % 1 !== 0) {
    return 'ERROR';
  }

  if(start > end) { // swap if largest number first
    let temp = start;
    start = end;
    end = temp;
  }
  for(let i = start; i <= end; i++) {
    sum += i;
  }
  return(sum);
};


let swapVars = function (var1,var2) {
  const temp = var1;
  var1 = var2;
  var2 = temp;
  return [var1,var2];
}

// Do not edit below this line
module.exports = sumAll;
