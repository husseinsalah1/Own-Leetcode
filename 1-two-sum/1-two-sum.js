/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var indexs = [];
  for (let i = 0; i < nums.length; i++) {
    for (let x = i + 1; x < nums.length; x++) {
      if (nums[i] + nums[x] === target) {
        indexs.push(i);
        indexs.push(x);
        break;
      }
    }
  }
  return indexs;
};