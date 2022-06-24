/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//using map data structure to contain the index to num
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = target - nums[i];
    if (map.has(num)) {
      return [map.get(num), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return null;
};
