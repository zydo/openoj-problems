function minAbsDifference(nums: number[], goal: number): number {
    const subsetSums = (arr: number[]): number[] => {
        let sums: number[] = [0];
        for (const value of arr) {
            const next = sums.slice();
            for (const s of sums) {
                next.push(s + value);
            }
            sums = next;
        }
        return sums;
    };

    const lowerBound = (arr: number[], target: number): number => {
        let lo = 0;
        let hi = arr.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (arr[mid] < target) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        return lo;
    };

    const half = Math.floor(nums.length / 2);
    const left = subsetSums(nums.slice(0, half)).sort((a, b) => a - b);
    const right = subsetSums(nums.slice(half));
    let best: number | null = null;
    for (const s of right) {
        const need = goal - s;
        const idx = lowerBound(left, need);
        for (const j of [idx - 1, idx]) {
            if (j >= 0 && j < left.length) {
                const diff = Math.abs(left[j] + s - goal);
                if (best === null || diff < best) {
                    best = diff;
                }
            }
        }
    }
    return best as number;
}
