/**
 * @param {number[][]} adjacency
 * @return {number}
 */
var countComponents = function (adjacency) {
    const n = adjacency.length;
    const visited = new Array(n).fill(false);
    let components = 0;
    for (let start = 0; start < n; start++) {
        if (visited[start]) {
            continue;
        }
        // An unvisited city during the sweep starts a new component;
        // this one traversal absorbs exactly one component.
        components++;
        visited[start] = true;
        const stack = [start];
        while (stack.length > 0) {
            const city = stack.pop();
            for (let other = 0; other < n; other++) {
                if (adjacency[city][other] === 1 && !visited[other]) {
                    // Mark at push time so no city is stacked twice;
                    // membership is by visitation, so self-loops and the
                    // symmetric matrix never double count.
                    visited[other] = true;
                    stack.push(other);
                }
            }
        }
    }
    return components;
};
