function calculate(s: string): number {
    let result = 0;
    let sign = 1;
    let num = 0;
    const stack: number[] = [];
    for (const ch of s) {
        if (ch >= "0" && ch <= "9") {
            num = num * 10 + (ch.charCodeAt(0) - 48);
        } else if (ch === "+") {
            result += sign * num;
            num = 0;
            sign = 1;
        } else if (ch === "-") {
            result += sign * num;
            num = 0;
            sign = -1;
        } else if (ch === "(") {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if (ch === ")") {
            result += sign * num;
            num = 0;
            result = result * stack.pop()! + stack.pop()!;
        }
        // spaces are ignored
    }
    return result + sign * num;
}
