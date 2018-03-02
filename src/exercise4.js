var _ = require("lodash");

const countSequence = _.curry(sequenceFunct);

function sequenceFunct(sequence,input) {
    
  if(sequence && input) {

    var n = 0;
    var pos = 0;
    var step = sequence.length;
    
    while (true) {
      pos = input.indexOf(sequence, pos);
      if (pos >= 0) {
        ++n;
        pos += step;
      } else break;
    }
    return n;
    
  } else {
    return 0;
  }
}

// function curry2(fn) {
//   return function(firstArg) {
//     return function(secondArg) {
//       return fn(firstArg,secondArg);
//     }
//   }
// }

// var sequenceFunctCurried = curry2(sequenceFunct);


module.exports = {
  title: "Exercise 4",
  run: countSequence
};
