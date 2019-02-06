function persistence(num) {
  let count = 0

  while ((num + "").length !== 1) {
    num = (num + "").split("").reduce((a, b) => a * b)
    count ++
  }
  
  return count
}
