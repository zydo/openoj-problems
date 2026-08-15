/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2 = function (m, n, positions) {
    const parent = Array.from({ length: m * n }, (_, i) => i);
    const size = new Array(m * n).fill(1);
    const land = new Array(m * n).fill(false);
    const find = (x) => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };
    let count = 0;
    const answer = [];
    for (const [r, c] of positions) {
        const cell = r * n + c;
        if (land[cell]) {
            answer.push(count);
            continue;
        }
        land[cell] = true;
        count++;
        for (const [dr, dc] of [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ]) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr < 0 || nr >= m || nc < 0 || nc >= n || !land[nr * n + nc]) {
                continue;
            }
            const ra = find(cell);
            const rb = find(nr * n + nc);
            if (ra !== rb) {
                if (size[ra] < size[rb]) {
                    parent[rb] = ra;
                    size[ra] += size[rb];
                } else {
                    parent[ra] = rb;
                    size[rb] += size[ra];
                }
                count--;
            }
        }
        answer.push(count);
    }
    return answer;
};
