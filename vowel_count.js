function getCount(str) {
  var vowelsCount = 0;
  
  str.split("").forEach(letter => {
    const vowelArray = ["a", "e", "i", "o", "u"]
    if (vowelArray.some(vowel => vowel === letter)) vowelsCount += 1 
  })
  
  return vowelsCount;
}
