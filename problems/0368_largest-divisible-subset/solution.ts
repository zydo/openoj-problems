function largestDivisibleSubset(nums: number[]): number[] {
    const arr = nums.slice().sort((a, b) => a - b);
    const n = arr.length;
    if (n === 0) return [];
    const dp: number[] = new Array(n).fill(1);
    const parent: number[] = new Array(n).fill(-1);
    let best = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] % arr[j] === 0 && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                parent[i] = j;
            }
        }
        if (dp[i] > dp[best]) best = i;
    }
    const result: number[] = [];
    for (let i = best; i !== -1; i = parent[i]) result.push(arr[i]);
    result.reverse();
    return result;
}
