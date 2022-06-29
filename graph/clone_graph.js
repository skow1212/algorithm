/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
// bfs;
var cloneGraph = function (node) {
  if (!node) {
    return node;
  }
  let map = new Map();
  let q = [node];
  map.set(node, new Node(node.val));
  while (q.length) {
    let n = q.shift();
    n.neighbors.forEach((neighbor) => {
      if (!map.has(neighbor)) {
        map.set(neighbor, new Node(neighbor));
        q.push(neighbor);
      }
      map.get(n).neighbors.push(map.get(neighbor));
    });
    return map.get(node);
  }
};
//dfs
var cloneGraph = function (node) {
  const dfs = (node, map, visited) => {
    if (!visited.has(node)) {
      if (!map.has(node)) {
        map.set(node, new Node(node.val));
      }
      node.neighbors.forEach((neighbor) => {
        if (!map.has(neighbor)) {
          map.set(neighbor, new Node(neighbor.val));
          dfs(neighbor, map, visited);
        }
        map.get(node).neighbors.push(map.get(neighbor));
      });
    }
  };
  if (!node) {
    return node;
  }
  let map = new Map();
  let visited = new Set();
  dfs(node, map, visited);
  return map.get(node);
};
