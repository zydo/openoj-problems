function isValid(s: string): boolean {
    const pairs: Record<string, string> = { ")": "(", "]": "[", "}": "{" };
    const stack: string[] = [];
    for (const ch of s) {
        if (ch === "(" || ch === "[" || ch === "{") {
            stack.push(ch);
        } else {
            if (stack.length === 0 || stack.pop() !== pairs[ch]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
