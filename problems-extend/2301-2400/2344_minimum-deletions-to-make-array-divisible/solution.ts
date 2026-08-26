function minOperations(nums: number[], numsDivide: number[]): number {
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    let g = 0;
    for (const value of numsDivide) {
        g = gcd(g, value);
    }
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (g % nums[i] === 0) {
            return i;
        }
    }
    return -1;
}
