function combinationSum(candidates: number[], target: number): number[][] {
    const results: number[][] = [];
    const path: number[] = [];

    const backtrack = (start: number, remaining: number): void => {
        if (remaining === 0) {
            results.push(path.slice());
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            const value = candidates[i];
            if (value > remaining) continue;
            path.push(value);
            backtrack(i, remaining - value);
            path.pop();
        }
    };

    backtrack(0, target);
    return results;
}
