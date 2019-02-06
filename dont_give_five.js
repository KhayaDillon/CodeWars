function dontGiveMeFive(start, end) {
  const range = []
  for (i = start; i <= end; i++) { 
    if (!(i + "").split("").includes("5")) range.push(i)
  }
  return range.length;
}
