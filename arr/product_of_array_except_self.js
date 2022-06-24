/**
 * @param {number[]} nums
 * @return {number[]}
 */
//
var productExceptSelf = function (nums) {
  let ans = [];
  let mult = 1;
  nums.forEach((num) => {
    ans.push(mult);
    mult *= num;
  });
  mult = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] *= mult;
    mult *= nums[i];
  }
  return ans;
};
