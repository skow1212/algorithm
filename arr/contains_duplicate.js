/**
 * @param {number[]} nums
 * @return {boolean}
 */
//using the characteristic of set 
 var containsDuplicate = function (nums) {
  let set = new Set();
  nums.forEach((num) => set.add(num));
  return set.size !== nums.length;
};