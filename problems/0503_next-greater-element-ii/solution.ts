function nextGreaterElements(nums: number[]): number[] {
    const n = nums.length;
    const result: number[] = new Array(n).fill(-1);
    const stack: number[] = [];
    for (let i = 0; i < 2 * n; i++) {
        const idx = i % n;
        while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[idx]) {
            result[stack.pop()!] = nums[idx];
        }
        if (i < n) {
            stack.push(idx);
        }
    }
    return result;
}
