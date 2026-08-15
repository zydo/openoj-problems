function kIncreasing(arr: number[], k: number): number {
    const longestNondecreasing = (seq: number[]): number => {
        const tails: number[] = [];
        for (const value of seq) {
            let lo = 0;
            let hi = tails.length;
            while (lo < hi) {
                const mid = (lo + hi) >> 1;
                if (tails[mid] <= value) {
                    lo = mid + 1;
                } else {
                    hi = mid;
                }
            }
            if (lo === tails.length) {
                tails.push(value);
            } else {
                tails[lo] = value;
            }
        }
        return tails.length;
    };

    let operations = 0;
    for (let start = 0; start < k; start++) {
        const sub: number[] = [];
        for (let i = start; i < arr.length; i += k) {
            sub.push(arr[i]);
        }
        operations += sub.length - longestNondecreasing(sub);
    }
    return operations;
}
