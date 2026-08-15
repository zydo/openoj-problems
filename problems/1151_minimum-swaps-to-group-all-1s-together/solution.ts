function minSwaps(data: number[]): number {
    let ones = 0;
    for (const v of data) ones += v;
    if (ones <= 1) return 0;
    let zeros = 0;
    for (let i = 0; i < ones; i++) {
        if (data[i] === 0) zeros++;
    }
    let best = zeros;
    for (let i = ones; i < data.length; i++) {
        zeros += 1 - data[i] - (1 - data[i - ones]);
        if (zeros < best) best = zeros;
    }
    return best;
}
