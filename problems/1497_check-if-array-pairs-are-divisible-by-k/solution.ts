function canArrange(arr: number[], k: number): boolean {
    const freq = new Array<number>(k).fill(0);
    for (const x of arr) {
        freq[((x % k) + k) % k] += 1;
    }
    if (freq[0] % 2 !== 0) return false;
    for (let i = 1; i <= Math.floor(k / 2); i++) {
        if (freq[i] !== freq[k - i]) return false;
    }
    return true;
}
