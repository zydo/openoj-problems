function nthUglyNumber(n: number): number {
    const ugly = new Array<number>(n + 1);
    ugly[0] = 1;
    let i2 = 0,
        i3 = 0,
        i5 = 0;
    for (let i = 1; i <= n; i++) {
        const m2 = ugly[i2] * 2,
            m3 = ugly[i3] * 3,
            m5 = ugly[i5] * 5;
        const nxt = Math.min(m2, m3, m5);
        ugly[i] = nxt;
        if (nxt === m2) i2++;
        if (nxt === m3) i3++;
        if (nxt === m5) i5++;
    }
    return ugly[n - 1];
}
