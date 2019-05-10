//X marnestedIndexs the spot!
//Level:6kyu
/*
Problem Description: Write a function x(n) that takes in a number n and returns an nxn array with an X in the middle.
The X will be represented by 1's and the rest will be 0's. 
E.g.
x(5) === [[1, 0, 0, 0, 1],
          [0, 1, 0, 1, 0],
          [0, 0, 1, 0, 0],
          [0, 1, 0, 1, 0],
          [1, 0, 0, 0, 1]];
x(6) === [[1, 0, 0, 0, 0, 1],
          [0, 1, 0, 0, 1, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 1, 0, 0, 1, 0],
          [1, 0, 0, 0, 0, 1]];
*/

function x(n) {
    var array = []
    var i = 0
    
    while (i < n) {
        var index = 0
        var a = []
        while(index < n) {
            a[index] = 0
            index++
        }
        
        array.push(a)
        i++
    }
    
    i = 0
    
    while (i < n) {
        var nestedIndex = 0
        while (nestedIndex < n) {
            if(i === nestedIndex) {
                array[i][nestedIndex] = 1
            }
            
            if (i + nestedIndex === n - 1) {
                array[i][nestedIndex]=1
            }
            
            nestedIndex++
        }
        
        i++
    }
    return array
}