function calculate(s: string): number {
    const stack: number[] = [];
    let num = 0;
    let op = "+";
    const last = s.length - 1;
    for (let i = 0; i <= last; i++) {
        const ch = s[i];
        if (ch >= "0" && ch <= "9") {
            num = num * 10 + (ch.charCodeAt(0) - 48);
        }
        if (
            ch === "+" ||
            ch === "-" ||
            ch === "*" ||
            ch === "/" ||
            i === last
        ) {
            if (op === "+") {
                stack.push(num);
            } else if (op === "-") {
                stack.push(-num);
            } else if (op === "*") {
                stack.push(stack.pop()! * num);
            } else {
                const prev = stack.pop()!;
                stack.push(Math.trunc(prev / num));
            }
            op = ch;
            num = 0;
        }
    }
    let total = 0;
    for (const value of stack) {
        total += value;
    }
    return total;
}
