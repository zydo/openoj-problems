function shortestSubarray(nums: number[], k: number): number {
    const n = nums.length;
    const prefix = new Array<number>(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    const dq: number[] = [];
    let head = 0;
    let best = n + 1;
    for (let i = 0; i <= n; i++) {
        const p = prefix[i];
        while (head < dq.length && prefix[dq[head]] <= p - k) {
            best = Math.min(best, i - dq[head]);
            head++;
        }
        while (head < dq.length && prefix[dq[dq.length - 1]] >= p) {
            dq.pop();
        }
        dq.push(i);
    }
    return best <= n ? best : -1;
}
