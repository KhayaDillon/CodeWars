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
