function minKBitFlips(nums: number[], k: number): number {
    const n = nums.length;
    const hint: number[] = new Array(n).fill(0);
    let flips = 0;
    let flip = 0;
    for (let i = 0; i < n; i++) {
        flip ^= hint[i];
        if ((nums[i] ^ flip) === 0) {
            if (i + k > n) {
                return -1;
            }
            flips += 1;
            flip ^= 1;
            if (i + k < n) {
                hint[i + k] ^= 1;
            }
        }
    }
    return flips;
}
