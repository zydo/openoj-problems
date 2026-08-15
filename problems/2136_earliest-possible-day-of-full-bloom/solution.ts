function earliestFullBloom(plantTime: number[], growTime: number[]): number {
    const pairs: [number, number][] = plantTime.map((p, i) => [p, growTime[i]]);
    pairs.sort((a, b) => b[1] - a[1]);
    let best = 0;
    let prefix = 0;
    for (const [plant, grow] of pairs) {
        prefix += plant;
        best = Math.max(best, prefix + grow);
    }
    return best;
}
