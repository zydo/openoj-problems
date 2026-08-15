function shiftingLetters(s: string, shifts: number[][]): string {
    const n = s.length;
    const diff: number[] = new Array(n + 1).fill(0);
    for (const [start, end, dir] of shifts) {
        const delta = dir === 1 ? 1 : -1;
        diff[start] += delta;
        diff[end + 1] -= delta;
    }
    const chars: string[] = [];
    let shift = 0;
    for (let i = 0; i < n; i++) {
        shift += diff[i];
        const c = s.charCodeAt(i) - 97;
        chars.push(String.fromCharCode(97 + ((((c + shift) % 26) + 26) % 26)));
    }
    return chars.join("");
}
