function maximumBooks(books: number[]): number {
    const n = books.length;
    const dp: number[] = new Array(n).fill(0);
    let stack: number[] = [];
    for (let i = 0; i < n; i++) {
        const bi = books[i];
        while (
            stack.length &&
            books[stack[stack.length - 1]] >= bi - (i - stack[stack.length - 1])
        ) {
            stack.pop();
        }
        const j = stack.length ? stack[stack.length - 1] : -1;
        let length: number;
        if (j >= 0) {
            length = i - j;
        } else {
            length = Math.min(i, bi) + 1; // stop where the sequence would go negative
        }
        const s = length * bi - (length * (length - 1)) / 2;
        dp[i] = s + (j >= 0 ? dp[j] : 0);
        stack.push(i);
    }
    let best = -Infinity;
    for (const x of dp) {
        if (x > best) best = x;
    }
    return best;
}
