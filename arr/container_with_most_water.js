/**
 * @param {number[]} height
 * @return {number}
 */
//from bigger to smaller
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let vol = 0;
  while (l < r) {
    vol = Math.max(vol, Math.min(height[l], height[r]) * (r - l));
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return vol;
};
