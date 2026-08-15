/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
    const n = arr.length;
    if (n === 1) return 0;
    const indices = new Map();
    for (let i = 0; i < n; i++) {
        const list = indices.get(arr[i]);
        if (list) list.push(i);
        else indices.set(arr[i], [i]);
    }
    const dist = new Array(n).fill(-1);
    dist[0] = 0;
    const queue = [0];
    let head = 0;
    while (head < queue.length) {
        const i = queue[head++];
        const d = dist[i] + 1;
        const nexts = indices.get(arr[i]) || [];
        indices.set(arr[i], []);
        nexts.push(i - 1, i + 1);
        for (const j of nexts) {
            if (j >= 0 && j < n && dist[j] === -1) {
                dist[j] = d;
                if (j === n - 1) return d;
                queue.push(j);
            }
        }
    }
    return dist[n - 1];
};
