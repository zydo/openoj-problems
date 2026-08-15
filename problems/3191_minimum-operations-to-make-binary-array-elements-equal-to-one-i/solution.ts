function minOperations(nums: number[]): number {
    const arr = nums.slice();
    const n = arr.length;
    let operations = 0;
    for (let i = 0; i + 2 < n; i++) {
        if (arr[i] === 0) {
            operations++;
            arr[i] ^= 1;
            arr[i + 1] ^= 1;
            arr[i + 2] ^= 1;
        }
    }
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) return -1;
    }
    return operations;
}
