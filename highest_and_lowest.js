function highAndLow(numbers){
  let sortedNumArray = numbers.split(" ").sort((a, b) => a - b)
  /* Not working for test '42 42' for some reason. 
  return `${sortedNumArray.pop()} ${sortedNumArray.shift()}` */
  return sortedNumArray[sortedNumArray.length - 1] + " " + sortedNumArray[0]
}
