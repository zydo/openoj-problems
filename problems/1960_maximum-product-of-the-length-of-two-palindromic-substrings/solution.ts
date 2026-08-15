function maxProduct(s: string): number {
    const n = s.length;

    // Manacher (odd palindromes): d1[i] = number of odd palindromes centered at i
    const d1: number[] = new Array(n).fill(0);
    let left = 0,
        right = -1;
    for (let i = 0; i < n; i++) {
        let k = 1;
        if (i <= right) {
            const mirror = d1[left + right - i];
            const span = right - i + 1;
            k = mirror < span ? mirror : span;
        }
        while (i - k >= 0 && i + k < n && s[i - k] === s[i + k]) {
            k++;
        }
        d1[i] = k;
        if (i + k - 1 > right) {
            left = i - k + 1;
            right = i + k - 1;
        }
    }

    const bestEnd: number[] = new Array(n).fill(0);
    const bestStart: number[] = new Array(n).fill(0);
    for (let c = 0; c < n; c++) {
        const length = 2 * d1[c] - 1;
        const end = c + d1[c] - 1;
        const start = c - d1[c] + 1;
        if (length > bestEnd[end]) bestEnd[end] = length;
        if (length > bestStart[start]) bestStart[start] = length;
    }

    // Shrink from the recorded maximum: a palindrome ending at i+1 of length L
    // implies one ending at i of length L-2 (drop one char from each side).
    for (let i = n - 2; i >= 0; i--) {
        const candEnd = bestEnd[i + 1] - 2;
        if (candEnd > bestEnd[i]) bestEnd[i] = candEnd;
    }
    for (let i = 1; i < n; i++) {
        const candStart = bestStart[i - 1] - 2;
        if (candStart > bestStart[i]) bestStart[i] = candStart;
    }

    const pref: number[] = new Array(n).fill(0);
    pref[0] = bestEnd[0];
    for (let i = 1; i < n; i++) {
        pref[i] = Math.max(pref[i - 1], bestEnd[i]);
    }

    const suff: number[] = new Array(n).fill(0);
    suff[n - 1] = bestStart[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suff[i] = Math.max(suff[i + 1], bestStart[i]);
    }

    let ans = 0;
    for (let i = 0; i < n - 1; i++) {
        const candidate = pref[i] * suff[i + 1];
        if (candidate > ans) ans = candidate;
    }
    return ans;
}
