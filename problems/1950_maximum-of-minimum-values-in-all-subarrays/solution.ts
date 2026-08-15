function findMaximums(nums: number[]): number[] {
    const n = nums.length;
    const left: number[] = new Array(n);
    const right: number[] = new Array(n);
    let stack: number[] = [];
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] >= nums[i]) {
            stack.pop();
        }
        left[i] = stack.length > 0 ? stack[stack.length - 1] : -1;
        stack.push(i);
    }
    stack = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] >= nums[i]) {
            stack.pop();
        }
        right[i] = stack.length > 0 ? stack[stack.length - 1] : n;
        stack.push(i);
    }
    const ans: number[] = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        const length = right[i] - left[i] - 1;
        if (nums[i] > ans[length - 1]) {
            ans[length - 1] = nums[i];
        }
    }
    for (let i = n - 2; i >= 0; i--) {
        if (ans[i + 1] > ans[i]) {
            ans[i] = ans[i + 1];
        }
    }
    return ans;
}
