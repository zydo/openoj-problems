function countCovering(intervals: number[][], queries: number[]): number[] {
    // The two sides can be sorted separately: a query never needs to know
    // which start belongs to which end, only the two one-sided counts.
    const starts = intervals.map((f) => f[0]).sort((a, b) => a - b);
    const ends = intervals.map((f) => f[1]).sort((a, b) => a - b);

    // first index with value > t
    function upperBound(arr: number[], t: number): number {
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
    function lowerBound(arr: number[], t: number): number {
        let lo = 0,
            hi = arr.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (arr[mid] < t) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    }

    // Blooming at t: start <= t and end >= t. upperBound counts starts <= t
    // (a flower starting exactly at t is blooming); lowerBound counts
    // ends < t, so a flower ending exactly at t is still counted.
    return queries.map((t) => upperBound(starts, t) - lowerBound(ends, t));
}
