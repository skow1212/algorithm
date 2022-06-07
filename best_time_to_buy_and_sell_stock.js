/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = 0;
  let profit = 0;
  for (let sell = 0; sell < prices.length; i++) {
    let diff = prices[sell] - prices[buy];
    profit = Math.max(diff, profit);
    buy = diff < 0 ? i : buy;
  }
  return profit;
};
