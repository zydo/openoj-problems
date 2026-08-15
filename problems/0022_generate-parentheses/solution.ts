function generateParenthesis(n: number): string[] {
    const result: string[] = [];
    const current: string[] = [];
    const backtrack = (openCount: number, closeCount: number): void => {
        if (current.length === 2 * n) {
            result.push(current.join(""));
            return;
        }
        if (openCount < n) {
            current.push("(");
            backtrack(openCount + 1, closeCount);
            current.pop();
        }
        if (closeCount < openCount) {
            current.push(")");
            backtrack(openCount, closeCount + 1);
            current.pop();
        }
    };
    backtrack(0, 0);
    return result;
}
