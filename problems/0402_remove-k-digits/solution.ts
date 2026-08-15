function removeKdigits(num: string, k: number): string {
    const stack: string[] = [];
    for (const ch of num) {
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > ch) {
            stack.pop();
            k--;
        }
        stack.push(ch);
    }
    if (k > 0) {
        stack.length = stack.length - k;
    }
    const result = stack.join("").replace(/^0+/, "");
    return result === "" ? "0" : result;
}
