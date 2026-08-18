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
        const queue = [start];
        // The FIFO queue spreads through the component in waves, expanding
        // every city at hop distance d before any at d + 1, yet only
        // visitation, not the order, decides the count.
        for (let head = 0; head < queue.length; head++) {
            const city = queue[head];
            for (let other = 0; other < n; other++) {
                if (adjacency[city][other] === 1 && !visited[other]) {
                    // Mark at enqueue time so no city enters the queue twice;
                    // each city is dequeued once and its adjacency row scanned
                    // once.
                    visited[other] = true;
                    queue.push(other);
                }
            }
        }
    }
    return components;
};
