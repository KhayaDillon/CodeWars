/*
Your task is to write a function which returns the sum of following series upto nth term(parameter).
*/

function SeriesSum(n) {
  let total = 0
  let reverage = 1
  for (let i = 0; i < n; i += 1) {
    if (i === 0) {
      total = 1
    } else {
      reverage += 3
      total = total + (1 / reverage)
    }
  }
  return total.toFixed(2)
}
