function pushDominoes(dominoes: string): string {
    const n = dominoes.length;
    const forces = new Array<number>(n).fill(0);
    let f = 0;
    for (let i = 0; i < n; i++) {
        if (dominoes[i] === "R") {
            f = n;
        } else if (dominoes[i] === "L") {
            f = 0;
        } else {
            f = Math.max(f - 1, 0);
        }
        forces[i] += f;
    }
    f = 0;
    for (let i = n - 1; i >= 0; i--) {
        if (dominoes[i] === "L") {
            f = n;
        } else if (dominoes[i] === "R") {
            f = 0;
        } else {
            f = Math.max(f - 1, 0);
        }
        forces[i] -= f;
    }
    let res = "";
    for (let i = 0; i < n; i++) {
        res += forces[i] === 0 ? "." : forces[i] > 0 ? "R" : "L";
    }
    return res;
}
