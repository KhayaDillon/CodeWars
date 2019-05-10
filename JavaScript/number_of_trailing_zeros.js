/*
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

Examples
  zeros(6) => 1
  # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

  zeros(12) => 2
  # 12! = 479001600 --> 2 trailing zeros
*/

Number.prototype.noExponents= function(){
    var data= String(this).split(/[eE]/);
    if(data.length== 1) return data[0]; 

    var  z= '', sign= this<0? '-':'',
    str= data[0].replace('.', ''),
    mag= Number(data[1])+ 1;

    if(mag<0){
        z= sign + '0.';
        while(mag++) z += '0';
        return z + str.replace(/^\-/,'');
    }
    mag -= str.length;  
    while(mag--) z += '0';
    return str + z;
}

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
