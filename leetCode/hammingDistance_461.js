/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let first = Math.max(x,y).toString(2);
    let second = Math.min(x,y).toString(2);
    let counter = 0;
    let lengthDiff = first.length - second.length;
    second = addNumberOfZeros(lengthDiff) + second;
    for(var i = 0; i < first.length; i++ ){
        if(first.charAt(i)!==second.charAt(i)){
            counter++;
        }
    }
    return counter;
};

function addNumberOfZeros(n){
    let zeros = '';
    for(var i = 0; i<n; i++){
        zeros += '0';
    }
    return zeros;
}