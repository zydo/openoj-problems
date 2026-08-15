function maxPrice(items: number[][], capacity: number): number {
    let totalWeight = 0;
    for (const item of items) totalWeight += item[1];
    if (totalWeight < capacity) return -1.0;
    // Stable sort by price-per-weight ratio, descending.
    const ordered = items
        .map((item, i) => [item, i] as [number[], number])
        .sort((a, b) => {
            const ra = a[0][0] / a[0][1];
            const rb = b[0][0] / b[0][1];
            if (rb !== ra) return rb - ra;
            return a[1] - b[1];
        })
        .map((pair) => pair[0]);
    let price = 0.0;
    let remaining = capacity;
    for (const [p, w] of ordered) {
        if (remaining <= 0) break;
        if (w <= remaining) {
            price += p;
            remaining -= w;
        } else {
            price += p * (remaining / w);
            remaining = 0;
        }
    }
    return price;
}
