/**
 * @param {number[]} nums
 * @return {number}
 */
//O(n^2)
// var lengthOfLIS = function (nums) {
//   let dp = new Array(nums.length).fill(1);
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[i] > nums[j] && dp[i] < 1 + dp[j]) {
//         dp[i] = 1 + dp[j];
//       }
//     }
//   }
//   return Math.max(...dp)
// };
var lengthOfLIS = function (nums) {
  let index = (nums, l, r, key) => {
    while (r > 1 + l) {
      let mid = l + Math.floor((l + r) / 2);
      console.log(mid)
      if (nums[mid] >= key) {
        r = mid;
      } else {
        l = mid;
      }
    }
    return r;
  };
  let dp = new Array(nums.length).fill(0);
  let len = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < dp[0]) {
      dp[0] = nums[i];
    } else if (nums[i] > dp[len - 1]) {
      dp[len] = nums[i];
      len++;
    } else {
      dp[index(nums, -1, len - 1, nums[i])] = nums[i];
    }
  }
  return len;
};
let test = [0, 1, 0, 3, 2, 3];
console.log(lengthOfLIS(test));
