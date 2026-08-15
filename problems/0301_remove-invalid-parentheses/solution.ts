function removeInvalidParentheses(s: string): string[] {
    const isValid = (str: string): boolean => {
        let count = 0;
        for (const ch of str) {
            if (ch === "(") count++;
            else if (ch === ")") {
                count--;
                if (count < 0) return false;
            }
        }
        return count === 0;
    };
    let level = new Set<string>([s]);
    while (true) {
        const valid = [...level].filter(isValid).sort();
        if (valid.length > 0) return valid;
        const next = new Set<string>();
        for (const item of level) {
            for (let i = 0; i < item.length; i++) {
                const ch = item[i];
                if (ch === "(" || ch === ")") {
                    next.add(item.slice(0, i) + item.slice(i + 1));
                }
            }
        }
        level = next;
    }
}
