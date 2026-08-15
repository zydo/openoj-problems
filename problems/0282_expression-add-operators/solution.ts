function addOperators(num: string, target: number): string[] {
    const n = num.length;
    const results: string[] = [];

    // num.length <= 10, so every operand is < 1e10 and any run of '*'
    // operands stays under ~1e10; the running total never exceeds ~1e11,
    // well within exact double range.
    const dfs = (
        index: number,
        prev: number,
        current: number,
        expression: string,
    ): void => {
        if (index === n) {
            if (current === target) {
                results.push(expression);
            }
            return;
        }
        for (let end = index; end < n; end++) {
            if (end !== index && num[index] === "0") {
                break;
            }
            const nxt = parseInt(num.slice(index, end + 1), 10);
            if (index === 0) {
                dfs(end + 1, nxt, nxt, String(nxt));
            } else {
                dfs(end + 1, nxt, current + nxt, expression + "+" + nxt);
                dfs(end + 1, -nxt, current - nxt, expression + "-" + nxt);
                dfs(
                    end + 1,
                    prev * nxt,
                    current - prev + prev * nxt,
                    expression + "*" + nxt,
                );
            }
        }
    };

    dfs(0, 0, 0, "");
    return results;
}
