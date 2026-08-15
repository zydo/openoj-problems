function minCost(nums: number[], costs: number[]): number {
    const n = nums.length;
    const nextGe: number[] = new Array(n).fill(-1);
    const nextSm: number[] = new Array(n).fill(-1);
    let stack: number[] = [];
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && nums[i] >= nums[stack[stack.length - 1]]) {
            nextGe[stack.pop()!] = i;
        }
        stack.push(i);
    }
    stack = [];
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && nums[i] < nums[stack[stack.length - 1]]) {
            nextSm[stack.pop()!] = i;
        }
        stack.push(i);
    }
    const inf = Infinity;
    const dp: number[] = new Array(n).fill(inf);
    dp[0] = 0;
    for (let i = 0; i + 1 < n; i++) {
        for (const j of [nextGe[i], nextSm[i]]) {
            if (j !== -1 && dp[i] + costs[j] < dp[j]) {
                dp[j] = dp[i] + costs[j];
            }
        }
    }
    return dp[n - 1];
}
