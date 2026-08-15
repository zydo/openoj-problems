function mincostTickets(days: number[], costs: number[]): number {
    const durations = [1, 7, 30];
    const travel = new Set(days);
    const last = days[days.length - 1];
    const dp = new Array(last + 31).fill(0);
    for (let day = 1; day <= last; day++) {
        if (!travel.has(day)) {
            dp[day] = dp[day - 1];
        } else {
            let best = Infinity;
            for (let i = 0; i < durations.length; i++) {
                const prev = Math.max(0, day - durations[i]);
                best = Math.min(best, dp[prev] + costs[i]);
            }
            dp[day] = best;
        }
    }
    return dp[last];
}
