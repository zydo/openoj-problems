function find132pattern(nums: number[]): boolean {
    if (nums.length < 3) {
        return false;
    }
    const stack: number[] = [];
    let third = -Infinity;
    for (let i = nums.length - 1; i >= 0; i--) {
        const value = nums[i];
        if (value < third) {
            return true;
        }
        while (stack.length > 0 && stack[stack.length - 1] < value) {
            third = stack.pop()!;
        }
        stack.push(value);
    }
    return false;
}
