/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function (flowers, people) {
    const starts = flowers.map((f) => f[0]).sort((a, b) => a - b);
    const ends = flowers.map((f) => f[1]).sort((a, b) => a - b);

    // first index with value > t
    function upperBound(arr, t) {
        let lo = 0,
            hi = arr.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (arr[mid] <= t) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    }

    // first index with value >= t
    function lowerBound(arr, t) {
        let lo = 0,
            hi = arr.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (arr[mid] < t) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    }

    return people.map((t) => upperBound(starts, t) - lowerBound(ends, t));
};
