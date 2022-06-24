/**
 * @param {number} n
 * @return {number}
 */
//refer the previous value
var climbStairs = function (n) {
  if (n < 2) {
    return 1;
  }
  let dp = new Array(n + 1).fill(1);
  for (let i = n - 2; i >= 0; i--) {
    dp[i] = dp[i + 1] + dp[i + 2];
  }
  return dp[0];
};
