function largestVariance(s: string): number {
    const chars = new Set<string>(s);
    let answer = 0;
    for (const high of chars) {
        for (const low of chars) {
            if (high === low) {
                continue;
            }
            let diff = 0; // max subarray sum ending here (may lack `low`)
            let hasLow = false; // whether diffWithLow has been initialized
            let diffWithLow = 0; // same but guaranteed to contain at least one `low`
            for (let k = 0; k < s.length; k++) {
                const ch = s[k];
                if (ch === high) {
                    diff += 1;
                    if (hasLow) {
                        diffWithLow += 1;
                    }
                } else if (ch === low) {
                    diff -= 1;
                    if (hasLow) {
                        diffWithLow = Math.max(diffWithLow - 1, diff);
                    } else {
                        diffWithLow = diff;
                        hasLow = true;
                    }
                    diff = Math.max(0, diff);
                }
                // else: neither char, both values unchanged
                if (hasLow && diffWithLow > answer) {
                    answer = diffWithLow;
                }
            }
        }
    }
    return answer;
}
