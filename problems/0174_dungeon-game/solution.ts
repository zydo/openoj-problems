function calculateMinimumHP(dungeon: number[][]): number {
    const m = dungeon.length;
    const n = dungeon[0].length;
    const INF = Infinity;
    const need: number[][] = Array.from({ length: m + 1 }, () =>
        new Array(n + 1).fill(INF),
    );
    need[m][n - 1] = 1;
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const bestNext = Math.min(need[i + 1][j], need[i][j + 1]);
            need[i][j] = Math.max(1, bestNext - dungeon[i][j]);
        }
    }
    return need[0][0];
}
