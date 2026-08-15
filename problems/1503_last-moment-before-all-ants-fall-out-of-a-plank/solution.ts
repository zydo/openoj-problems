function getLastMoment(n: number, left: number[], right: number[]): number {
    let best = 0;
    for (const position of left) {
        best = Math.max(best, position);
    }
    for (const position of right) {
        best = Math.max(best, n - position);
    }
    return best;
}
