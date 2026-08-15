/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    const n = graph.length;
    const target = n - 1;
    const paths = [];
    const path = [0];

    function dfs(node) {
        if (node === target) {
            paths.push(path.slice());
            return;
        }
        for (const nxt of graph[node]) {
            path.push(nxt);
            dfs(nxt);
            path.pop();
        }
    }

    dfs(0);
    return paths;
};
