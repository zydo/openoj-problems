function robotWithString(s: string): string {
    const n = s.length;
    const suffixMin: string[] = new Array(n + 1).fill(String.fromCharCode(127));
    for (let i = n - 1; i >= 0; i--) {
        suffixMin[i] = s[i] < suffixMin[i + 1] ? s[i] : suffixMin[i + 1];
    }
    const stack: string[] = [];
    const out: string[] = [];
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && stack[stack.length - 1] <= suffixMin[i]) {
            out.push(stack.pop()!);
        }
        stack.push(s[i]);
    }
    while (stack.length > 0) {
        out.push(stack.pop()!);
    }
    return out.join("");
}
