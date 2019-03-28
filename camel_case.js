/* Write simple .camelCase method for strings. All words must have their first letter capitalized without spaces. */

String.prototype.camelCase=function(){
  array = this.split(" ")
  capitalizedArray = array.map(word => word.charAt(0).toUpperCase() + word.slice(1))
  return capitalizedArray.join("")
}