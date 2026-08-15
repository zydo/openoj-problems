function findKthNumber(n: number, k: number): number {
    const countSteps = function (n1: number, n2: number): number {
        let steps = 0;
        while (n1 <= n) {
            steps += Math.min(n + 1, n2) - n1;
            n1 *= 10;
            n2 *= 10;
        }
        return steps;
    };

    let cur = 1;
    k -= 1;
    while (k > 0) {
        const steps = countSteps(cur, cur + 1);
        if (steps <= k) {
            cur += 1;
            k -= steps;
        } else {
            cur *= 10;
            k -= 1;
        }
    }
    return cur;
}
