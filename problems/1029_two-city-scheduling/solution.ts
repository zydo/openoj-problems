function twoCitySchedCost(costs: number[][]): number {
    const ordered = [...costs].sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
    const n = Math.floor(ordered.length / 2);
    let total = 0;
    for (let i = 0; i < ordered.length; i++) {
        total += i < n ? ordered[i][0] : ordered[i][1];
    }
    return total;
}
