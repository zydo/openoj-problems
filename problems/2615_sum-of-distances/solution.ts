function distance(nums: number[]): number[] {
    const pos = new Map<number, number[]>();
    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];
        if (!pos.has(x)) pos.set(x, []);
        pos.get(x)!.push(i);
    }
    const arr: number[] = new Array(nums.length).fill(0);
    for (const idxs of pos.values()) {
        const m = idxs.length;
        const prefix: number[] = new Array(m + 1).fill(0);
        for (let j = 0; j < m; j++) {
            prefix[j + 1] = prefix[j] + idxs[j];
        }
        for (let j = 0; j < m; j++) {
            const i = idxs[j];
            const left = i * j - prefix[j];
            const right = prefix[m] - prefix[j + 1] - i * (m - 1 - j);
            arr[i] = left + right;
        }
    }
    return arr;
}
