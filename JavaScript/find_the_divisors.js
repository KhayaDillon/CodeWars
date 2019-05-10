/*
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors
(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime'.
*/

function divisors(integer) {
  if (integer > 1) {
    let divisors = []
    
    for (var i = 2; i < integer; i++) {
      if (integer % i === 0) divisors.push(i)
    }
    
    return divisors.length === 0 ? `${integer} is prime` : divisors
  }
};
