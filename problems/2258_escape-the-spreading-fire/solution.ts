function maximumMinutes(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const INF = 1073741823; // 2^30 - 1, above every reachable time (including 1e9 waits)
    const dirs: number[][] = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];
    const targetI = m - 1;
    const targetJ = n - 1;

    const fire: number[][] = Array.from({ length: m }, () =>
        new Array(n).fill(INF),
    );
    const queue: number[][] = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                fire[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }
    for (let head = 0; head < queue.length; head++) {
        const [i, j] = queue[head];
        for (const [di, dj] of dirs) {
            const ni = i + di;
            const nj = j + dj;
            if (
                ni >= 0 &&
                ni < m &&
                nj >= 0 &&
                nj < n &&
                grid[ni][nj] !== 2 &&
                fire[ni][nj] === INF
            ) {
                fire[ni][nj] = fire[i][j] + 1;
                queue.push([ni, nj]);
            }
        }
    }

    const canReach = (wait: number): boolean => {
        if (wait >= fire[0][0]) {
            return false;
        }
        const seen: boolean[][] = Array.from({ length: m }, () =>
            new Array(n).fill(false),
        );
        seen[0][0] = true;
        const dq: number[][] = [[0, 0, wait]];
        for (let head = 0; head < dq.length; head++) {
            const [i, j, t] = dq[head];
            if (i === targetI && j === targetJ) {
                return true;
            }
            for (const [di, dj] of dirs) {
                const ni = i + di;
                const nj = j + dj;
                if (
                    ni >= 0 &&
                    ni < m &&
                    nj >= 0 &&
                    nj < n &&
                    grid[ni][nj] !== 2 &&
                    !seen[ni][nj]
                ) {
                    const nt = t + 1;
                    if (ni === targetI && nj === targetJ) {
                        if (nt <= fire[ni][nj]) {
                            seen[ni][nj] = true;
                            dq.push([ni, nj, nt]);
                        }
                    } else {
                        if (nt < fire[ni][nj]) {
                            seen[ni][nj] = true;
                            dq.push([ni, nj, nt]);
                        }
                    }
                }
            }
        }
        return false;
    };

    if (!canReach(0)) {
        return -1;
    }
    if (canReach(1000000000)) {
        return 1000000000;
    }

    let lo = 0;
    let hi = 1000000000;
    while (lo < hi) {
        const mid = Math.floor((lo + hi + 1) / 2);
        if (canReach(mid)) {
            lo = mid;
        } else {
            hi = mid - 1;
        }
    }
    return lo;
}
