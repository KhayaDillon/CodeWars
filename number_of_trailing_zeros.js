/*
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

Examples
  zeros(6) => 1
  # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

  zeros(12) => 2
  # 12! = 479001600 --> 2 trailing zeros
*/

function zeros (num) {
  const numToMultiply = [] 
  for (n = 1; n <= num; n++) {
    numToMultiply.push(n)
  }
  
  let count = 0
  
  if (numToMultiply.length !== 0) {
  
    const factorial = numToMultiply.reduce((a, b) => a * b).noExponents().toString() 
    const digits = factorial.split("") 
    
    while (digits[digits.length - 1] === "0") {
      count++
      digits.pop()
    }
  }
  
  return count
}
