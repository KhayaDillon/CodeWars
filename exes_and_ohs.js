function XO(str) {
  let ohs = str.toLowerCase().split("").filter(l => l === "o")
  let exes = str.toLowerCase().split("").filter(l => l === "x")
  return ohs.length === exes.length
}
