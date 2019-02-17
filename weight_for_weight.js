function orderWeight(string) {
  const sortedArray = string.split(" ").sort(function(a, b) {  
    if (a.digitSum() === b.digitSum() && a < b) {
      return -1
    } else if (a.digitSum() === b.digitSum() && a > b) {
      return 1
    } else if (a.digitSum() < b.digitSum()) {
      return -1
    } else if (a.digitSum() > b.digitSum()) {
      return 1
    } else {
      return 0
    }
  })   
  
  return sortedArray.join(" ")
}
