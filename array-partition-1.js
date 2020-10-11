
//https://leetcode.com/problems/array-partition-i

var arrayPairSum = function(nums) {
  nums.sort((x, y) => x - y);
  let result = 0;
  for(let i = 0; i < nums.length; i += 2){
    result += nums[i];
  }
  return result;
};
