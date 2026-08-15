function makesquare(matchsticks: number[]): boolean {
    let total = 0;
    for (const v of matchsticks) total += v;
    if (total % 4 !== 0) return false;
    const side = total / 4;
    const sticks = matchsticks.slice().sort((a, b) => b - a);
    if (sticks.length === 0 || sticks[0] > side) return false;
    const sides = [0, 0, 0, 0];

    function dfs(i: number): boolean {
        if (i === sticks.length) {
            return (
                sides[0] === side &&
                sides[1] === side &&
                sides[2] === side &&
                sides[3] === side
            );
        }
        const value = sticks[i];
        const tried = new Set<number>();
        for (let j = 0; j < 4; j++) {
            if (tried.has(sides[j])) continue;
            tried.add(sides[j]);
            if (sides[j] + value <= side) {
                sides[j] += value;
                if (dfs(i + 1)) return true;
                sides[j] -= value;
            }
        }
        return false;
    }

    return dfs(0);
}
