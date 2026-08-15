function numPairsDivisibleBy60(time: number[]): number {
    const counts: number[] = new Array(60).fill(0);
    let total = 0;
    for (const duration of time) {
        const remainder = duration % 60;
        total += counts[(60 - remainder) % 60];
        counts[remainder] += 1;
    }
    return total;
}
