/**
 * @param {number[]} favorite
 * @return {number}
 */
var maximumInvitations = function (favorite) {
    const n = favorite.length;
    const indeg = new Array(n).fill(0);
    for (const f of favorite) {
        indeg[f]++;
    }

    const depth = new Array(n).fill(1);
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (indeg[i] === 0) {
            queue.push(i);
        }
    }
    for (let head = 0; head < queue.length; head++) {
        const u = queue[head];
        const v = favorite[u];
        if (depth[u] + 1 > depth[v]) {
            depth[v] = depth[u] + 1;
        }
        if (--indeg[v] === 0) {
            queue.push(v);
        }
    }

    let maxCycle = 0;
    let pairSum = 0;
    const visited = new Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        if (indeg[i] > 0 && !visited[i]) {
            let cycleLen = 0;
            let cur = i;
            while (!visited[cur]) {
                visited[cur] = true;
                cycleLen++;
                cur = favorite[cur];
            }
            if (cycleLen === 2) {
                pairSum += depth[i] + depth[favorite[i]];
            } else if (cycleLen > maxCycle) {
                maxCycle = cycleLen;
            }
        }
    }
    return Math.max(maxCycle, pairSum);
};
