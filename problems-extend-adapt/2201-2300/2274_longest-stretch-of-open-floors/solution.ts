function longestOpenStretch(bottom: number, top: number, blocked: number[]): number {
    blocked.sort((left, right) => left - right);
    let best = Math.max(blocked[0] - bottom, top - blocked[blocked.length - 1]);
    for (let i = 1; i < blocked.length; i++) {
        best = Math.max(best, blocked[i] - blocked[i - 1] - 1);
    }
    return best;
}
