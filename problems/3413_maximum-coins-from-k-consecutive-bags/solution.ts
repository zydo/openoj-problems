function maximumCoins(coins: number[][], k: number): number {
    const segments = coins.slice().sort((a, b) => a[0] - b[0]); // stable
    const n = segments.length;
    const lefts = segments.map((s) => s[0]);
    const rights = segments.map((s) => s[1]);
    const cs = segments.map((s) => s[2]);
    const area: number[] = new Array(n);
    for (let i = 0; i < n; i++) area[i] = cs[i] * (rights[i] - lefts[i] + 1);
    const prefix: number[] = new Array(n + 1);
    prefix[0] = 0;
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + area[i];

    // first index i in [0, n) with arr[i] >= target, else n  (bisect_left)
    const lowerBound = (arr: number[], target: number): number => {
        let lo = 0,
            hi = arr.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (arr[mid] < target) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };
    // first index i in [0, n) with arr[i] > target, else n  (bisect_right)
    const upperBound = (arr: number[], target: number): number => {
        let lo = 0,
            hi = arr.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (arr[mid] <= target) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };

    const window = (start: number): number => {
        const end = start + k - 1;
        const a = lowerBound(rights, start);
        const b = upperBound(lefts, end) - 1;
        if (a > b) return 0;
        const loA = Math.max(lefts[a], start);
        const hiA = Math.min(rights[a], end);
        if (a === b) {
            return loA <= hiA ? cs[a] * (hiA - loA + 1) : 0;
        }
        const loB = Math.max(lefts[b], start);
        const hiB = Math.min(rights[b], end);
        let total = prefix[b + 1] - prefix[a];
        total += cs[a] * (hiA - loA + 1) - area[a];
        total += cs[b] * (hiB - loB + 1) - area[b];
        return total;
    };

    let best = 0;
    for (let i = 0; i < n; i++) {
        for (const candidate of [lefts[i], rights[i] - k + 1]) {
            const value = window(candidate);
            if (value > best) best = value;
        }
    }
    return best;
}
