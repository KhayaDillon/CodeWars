/*
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *, for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
*/


/* Don't know why this way doesn't work. Test values looks like it matches results.

function towerBuilder(nFloors) {
  let tower = ['*']
  for (n = 1; n < nFloors; n++) {
    const newFloor = tower[tower.length - 1] + '**'
    tower = tower.map(floor => '\xa0' + floor + '\xa0')     
    tower.push(newFloor)
  }
  return tower
}
*/

function towerBuilder(floors){
  let space,star,tower = []
  for(n = 1; n <= floors; n++){
    space = " ".repeat(floors - n)
    star  = "*".repeat((2*n) - 1)
    tower.push(`${space}${star}${space}`)
  }
  return tower
}
