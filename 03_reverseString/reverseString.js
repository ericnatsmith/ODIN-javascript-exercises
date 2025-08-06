const reverseString = function(string) {

  // initialize array
  const reverseString = [];

  // loop from last letter to first
  for(let i = string.length; i > 0; i-- ) {
    reverseString.push(string[i-1]) // add to array
  }  

  let outputString = reverseString.join("");
  console.log(outputString);
  // export array to string
  return outputString

};

// Do not edit below this line
module.exports = reverseString;
