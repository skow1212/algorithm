/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[left] >= target) {
      if (nums[left] === target) {
        return left;
      }
      left = mid;
    } else if (nums[right] <= target) {
      if (nums[right] === target) {
        return right;
      }
      right = mid;
    }
  }
  return -1;
};

let nums = [1];
console.log(search(nums));
