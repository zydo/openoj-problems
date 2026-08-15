function countSpecialNumbers(n: number): number {
    function perm(a: number, k: number): number {
        let p = 1;
        for (let i = 0; i < k; i++) {
            p *= a - i;
        }
        return p;
    }

    const digits = String(n).split("").map(Number);
    const L = digits.length;
    let total = 0;
    for (let k = 1; k < L; k++) {
        total += 9 * perm(9, k - 1);
    }
    let used = 0;
    let broke = false;
    for (let i = 0; i < L; i++) {
        const d = digits[i];
        for (let x = i === 0 ? 1 : 0; x < d; x++) {
            if (!((used >> x) & 1)) {
                total += perm(10 - (i + 1), L - i - 1);
            }
        }
        if ((used >> d) & 1) {
            broke = true;
            break;
        }
        used |= 1 << d;
    }
    if (!broke) {
        total += 1;
    }
    return total;
}
