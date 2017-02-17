/*Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".*/


/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  let ans = s.split('').reverse().join('');
  return ans;
};