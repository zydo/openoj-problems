function characterReplacement(s: string, k: number): number {
    const count = new Array<number>(128).fill(0);
    let best = 0,
        left = 0,
        maxFreq = 0;
    for (let right = 0; right < s.length; right++) {
        const c = s.charCodeAt(right);
        count[c]++;
        if (count[c] > maxFreq) maxFreq = count[c];
        while (right - left + 1 - maxFreq > k) {
            count[s.charCodeAt(left)]--;
            left++;
        }
        if (right - left + 1 > best) best = right - left + 1;
    }
    return best;
}
