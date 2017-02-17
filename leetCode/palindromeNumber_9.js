/*Determine whether an integer is a palindrome. Do this without extra space.

click to show spoilers.

Subscribe to see which companies asked this question.*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var input = x + '';
    let val = input.split('').reverse().join('');
    if(val==input){
        return true;
    }else{
        return false;
    }
};