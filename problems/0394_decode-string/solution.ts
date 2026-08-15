function decodeString(s: string): string {
    const stack: [string, number][] = [];
    let current = "";
    let repeat = 0;
    for (const ch of s) {
        if (ch >= "0" && ch <= "9") {
            repeat = repeat * 10 + (ch.charCodeAt(0) - 48);
        } else if (ch === "[") {
            stack.push([current, repeat]);
            current = "";
            repeat = 0;
        } else if (ch === "]") {
            const [previous, times] = stack.pop() as [string, number];
            current = previous + current.repeat(times);
        } else {
            current += ch;
        }
    }
    return current;
}
