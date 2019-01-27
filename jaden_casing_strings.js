String.prototype.toJadenCase = function () {
  let capitalizedArray = this.split(" ").map(word => word[0].toUpperCase() + word.slice(1))
  return capitalizedArray.join(" ")
};
