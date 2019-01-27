function divisors(integer) {
  if (integer > 1) {
    let divisors = []
    
    for (var i = 2; i < integer; i++) {
      if (integer % i === 0) divisors.push(i)
    }
    
    return divisors.length === 0 ? `${integer} is prime` : divisors
  }
};
