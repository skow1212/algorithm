/**
 * @param {number[]} nums
 * @return {number}
 */
//O(n) Kadane Algorithms
// var maxSubArray = function (nums) {
//   let max = Number.Max_VALUE * -1;
//   let sum = 0;
//   nums.forEach((num) => {
//     sum = num >= sum + num ? num : sum + num;
//     max = max > sum ? max : sum;
//   });
//   return max;
// };

//Div and Conq
//https://personal.utdallas.edu/~daescu/maxsa.pdf
var maxSubArray = function (nums) {
  let comp = (nums, left, right) => {
    if (left >= right) {
      return nums[left];
    }
    let mid = Math.floor((left + right) / 2);
    let left_value = comp(nums, left, mid);
    let right_value = comp(nums, mid + 1, right);
    let cross_value = cross(nums, left, mid, right);
    return Math.max(left_value, right_value, cross_value);
  };
  let cross = (nums, left, mid, right) => {
    let left_sum = -Infinity;
    let sum = 0;
    for (let i = mid; i >= left; i--) {
      sum += nums[i];
      if (sum >= left_sum) {
        left_sum = sum;
      }
    }
    sum = 0;
    let right_sum = -Infinity;
    for (let j = mid + 1; j <= right; j++) {
      sum += nums[j];
      if (sum >= right_sum) {
        right_sum = sum;
      }
    }
    return Math.max(left_sum, right_sum, left_sum + right_sum);
  };
  return comp(nums, 0, nums.length - 1);
};
