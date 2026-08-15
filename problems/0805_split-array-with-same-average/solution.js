/**
 * @param {number[]} nums
 * @return {boolean}
 */
var splitArraySameAverage = function (nums) {
    const n = nums.length;
    let total = 0;
    for (const v of nums) total += v;

    // Map from subset size -> set of achievable sums with that size.
    const subsetSums = (arr) => {
        const d = new Map();
        const m = arr.length;
        for (let mask = 0; mask < 1 << m; mask++) {
            let s = 0;
            let sz = 0;
            for (let i = 0; i < m; i++) {
                if ((mask >> i) & 1) {
                    s += arr[i];
                    sz += 1;
                }
            }
            if (!d.has(sz)) d.set(sz, new Set());
            d.get(sz).add(s);
        }
        return d;
    };

    const mid = Math.floor(n / 2);
    const left = subsetSums(nums.slice(0, mid));
    const right = subsetSums(nums.slice(mid));
    const nr = n - mid;

    for (let s = 1; s < n; s++) {
        if ((total * s) % n !== 0) continue;
        const target = (total * s) / n;
        const lo = Math.max(0, s - nr);
        const hi = Math.min(mid, s);
        for (let s1 = lo; s1 <= hi; s1++) {
            const s2 = s - s1;
            if (!left.has(s1) || !right.has(s2)) continue;
            for (const v of left.get(s1)) {
                if (right.get(s2).has(target - v)) return true;
            }
        }
    }
    return false;
};
