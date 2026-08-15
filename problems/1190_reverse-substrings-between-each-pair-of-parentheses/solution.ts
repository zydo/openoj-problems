function reverseParentheses(s: string): string {
    const stack: string[][] = [[]];
    for (const ch of s) {
        if (ch === "(") {
            stack.push([]);
        } else if (ch === ")") {
            const top = stack.pop()!;
            stack[stack.length - 1].push(...top.reverse());
        } else {
            stack[stack.length - 1].push(ch);
        }
    }
    return stack[0].join("");
}
