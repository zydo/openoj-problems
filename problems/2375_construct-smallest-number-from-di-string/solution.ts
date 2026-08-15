function smallestNumber(pattern: string): string {
    const result: string[] = [];
    const stack: string[] = [];
    const n = pattern.length;
    for (let i = 0; i <= n; i++) {
        stack.push(String(i + 1));
        if (i === n || pattern[i] === "I") {
            while (stack.length > 0) {
                result.push(stack.pop()!);
            }
        }
    }
    return result.join("");
}
