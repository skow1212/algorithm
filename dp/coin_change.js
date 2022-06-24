/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 1 doesn't mean the value it means how many coins we use
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let curr = 1; curr < amount + 1; curr++) {
    coins.forEach((coin) => {
      if (curr - coin >= 0) {
        dp[curr] = Math.min(dp[curr], 1 + dp[curr - coin]);
      }
    });
  }
  return dp[amount] !== amount + 1 ? dp[amount] : -1;
};
