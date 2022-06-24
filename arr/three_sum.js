/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//O(2) Coudln't find the better way to solve
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  let ans = [];
  nums.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      let num = nums[i] + nums[l] + nums[r];
      if (num < 0) {
        l++;
      } else if (num > 0) {
        r--;
      } else {
        ans.push([nums[i], nums[l], nums[r]]);
        l++;
        r--;
        while (l < r && nums[l] === nums[l - 1]) {
          l++;
        }
        while (l < r && nums[r] === nums[r + 1]) {
          r--;
        }
      }
    }
  }
  return ans;
};

let test = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(test));
