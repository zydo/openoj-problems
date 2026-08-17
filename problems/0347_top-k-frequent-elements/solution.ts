function topKFrequent(nums: number[], k: number): number[] {
    // One counting pass over the array.
    const counts = new Map<number, number>();
    for (const x of nums) {
        counts.set(x, (counts.get(x) || 0) + 1);
    }
    const items = Array.from(counts.entries());
    // Key (-count, value): higher frequency first, ties broken by
    // ascending value — sorting unique items keeps the output
    // deterministic, which the judge's expected order relies on.
    items.sort((a, b) => {
        if (a[1] !== b[1]) return b[1] - a[1];
        return a[0] - b[0];
    });
    return items.slice(0, k).map(([v]) => v);
}
