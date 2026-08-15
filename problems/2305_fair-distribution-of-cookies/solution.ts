function distributeCookies(cookies: number[], k: number): number {
    const children: number[] = new Array(k).fill(0);
    let best = Infinity;

    function backtrack(i: number, curMax: number): void {
        if (curMax >= best) return;
        if (i === cookies.length) {
            best = curMax;
            return;
        }
        const tried = new Set<number>();
        for (let j = 0; j < k; j++) {
            if (tried.has(children[j])) continue;
            tried.add(children[j]);
            children[j] += cookies[i];
            backtrack(i + 1, Math.max(curMax, children[j]));
            children[j] -= cookies[i];
        }
    }

    backtrack(0, 0);
    return best;
}
