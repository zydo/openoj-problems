function findClosestElements(arr: number[], k: number, x: number): number[] {
    let lo = 0;
    let hi = arr.length - k;
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (x - arr[mid] > arr[mid + k] - x) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return arr.slice(lo, lo + k);
}
