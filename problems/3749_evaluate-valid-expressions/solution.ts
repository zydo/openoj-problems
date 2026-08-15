function evaluateExpression(expression: string): number {
    function parse(i: number): [number, number] {
        const ch = expression[i];
        if (ch === "-" || (ch >= "0" && ch <= "9")) {
            let j = ch === "-" ? i + 1 : i;
            while (
                j < expression.length &&
                expression[j] >= "0" &&
                expression[j] <= "9"
            ) {
                j++;
            }
            return [parseInt(expression.slice(i, j), 10), j];
        }
        const op = expression.slice(i, i + 3);
        i += 4;
        const r1 = parse(i);
        const r2 = parse(r1[1] + 1);
        let v: number;
        if (op === "add") v = r1[0] + r2[0];
        else if (op === "sub") v = r1[0] - r2[0];
        else if (op === "mul") v = r1[0] * r2[0];
        else v = Math.trunc(r1[0] / r2[0]);
        return [v, r2[1] + 1];
    }
    return parse(0)[0];
}
