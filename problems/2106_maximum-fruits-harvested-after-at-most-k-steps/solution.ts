function maxTotalFruits(
    fruits: number[][],
    startPos: number,
    k: number,
): number {
    const n = fruits.length;
    const positions = fruits.map((f) => f[0]);
    const prefix: number[] = [0];
    for (const f of fruits) {
        prefix.push(prefix[prefix.length - 1] + f[1]);
    }

    const windowCost = (leftPos: number, rightPos: number): number => {
        if (startPos <= leftPos) {
            return rightPos - startPos;
        }
        if (startPos >= rightPos) {
            return startPos - leftPos;
        }
        return Math.min(
            2 * (startPos - leftPos) + (rightPos - startPos),
            2 * (rightPos - startPos) + (startPos - leftPos),
        );
    };

    let best = 0;
    let left = 0;
    for (let right = 0; right < n; right++) {
        while (
            left < right &&
            windowCost(positions[left], positions[right]) > k
        ) {
            left++;
        }
        if (windowCost(positions[left], positions[right]) <= k) {
            best = Math.max(best, prefix[right + 1] - prefix[left]);
        }
    }
    return best;
}
