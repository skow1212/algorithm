/**
 * @param {number[]} nums
 * @return {number}
 */
//O(n^2)
var lengthOfLIS = function (nums) {
  let dp = new dpay(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && dp[i] < 1 + dp[j]) {
        dp[i] = 1 + dp[j];
      }
    }
  }
  return Math.max(...dp)
};
//O(nlogn) using binary search
// var lengthOfLIS = function (nums) {
//   let dp = [];
//   const binarySearch = (target) => {
//     let l = 0;
//     let r = dp.length - 1;
//     while (l <= r) {
//       let mid = Math.floor((l + r) / 2);
//       if (dp[mid] < target) {
//         l = mid + 1;
//       } else if (dp[mid] > target) {
//         r = mid - 1;
//       } else {
//         return;
//       }
//     }
//     dp[l] = target;
//   };
//   for (let i = 0; i < nums.length; i++) {
//     if (dp.length > 0) {
//       if (nums[i] > dp[dp.length - 1]) {
//         dp.push(nums[i]);
//       } else if (nums[i] < dp[dp.length - 1]) {
//         binarySearch(nums[i]);
//       }
//     } else {
//       dp.push(nums[i]);
//     }
//   }
//   return dp.length;
// };
let test = [3,4,1,5,4,2,4];
console.log(lengthOfLIS(test));
