/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    var val = nums;
    var ans = [];
    for (el in findNums){
        var trigger = false;
            for(var num = el; num<val.length; num++){
                if(findNums[el] < val[num] && el <= num){
                    ans.push(val[num]);
                    val.splice(num,1);
                    trigger = true;
                    break;
                }
            }
            if(!trigger){
                ans.push(-1);
            }
        }
    return ans;
};