/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let matrix = new Array(numCourses).fill(new Array(numCourses));
  let ing = new Array(numCourses);
  for (let i = 0; i < prerequisites.length; i++) {
    let ready = prerequisites[i][0];
    let pre = prerequisites[i][1];
    ing[ready] = matrix[pre][ready] === 0 ? ing[ready] + 1 : ing[ready];
    matrix[pre][ready] = 1;
  }
  let count = 0;
  let q = [];
  ing.forEach((i, course) => {
    if (course === 0) {
      q.push(i);
    }
  });
  while (q.length) {
    let course = q.shift();
    count++;
    for (let i = 0; i < numCourses; i++) {
      if (matrix[course][i] != 0 && --ing[i] === 0) {
        q.push(i);
      }
    }
  }
  return count === numCourses;
};
