/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let set = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = target - nums[i];
    if (set.has(num)) {
      return [set.get(num), i];
    } else {
      set.set(nums[i], i);
    }
  }
  return null;
};
