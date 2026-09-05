function countProductBoundedSegments(values: number[], limit: number): number {
    // Products are at least 1 (elements >= 1), so limit <= 1 admits nothing.
    if (limit <= 1) {
        return 0;
    }
    let count = 0;
    let product = 1;
    let left = 0;
    for (let right = 0; right < values.length; right++) {
        product *= values[right];
        // Shrink from the left until [left, right] is the longest window
        // ending here with product strictly below limit.
        while (product >= limit) {
            product = Math.trunc(product / values[left]);
            left += 1;
        }
        // Every window suffix also ends at right and has a smaller product:
        // right - left + 1 segments, each counted once by its right end.
        count += right - left + 1;
    }
    return count;
}
