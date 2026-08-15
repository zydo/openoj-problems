function countPrimes(n: number): number {
    if (n < 3) return 0;
    const isComposite = new Uint8Array(n);
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (!isComposite[i]) {
            count++;
            if (i * i < n) {
                for (let j = i * i; j < n; j += i) {
                    isComposite[j] = 1;
                }
            }
        }
    }
    return count;
}
