function openLock(deadends: string[], target: string): number {
    const dead = new Set<string>(deadends);
    const start = "0000";
    if (dead.has(start)) return -1;
    const seen = new Set<string>([start]);
    let queue: [string, number][] = [[start, 0]];
    while (queue.length > 0) {
        const next: [string, number][] = [];
        for (const [state, steps] of queue) {
            if (state === target) return steps;
            for (let i = 0; i < 4; i++) {
                for (const delta of [1, -1]) {
                    const digit = (state.charCodeAt(i) - 48 + delta + 10) % 10;
                    const nxt =
                        state.substring(0, i) +
                        String(digit) +
                        state.substring(i + 1);
                    if (!seen.has(nxt) && !dead.has(nxt)) {
                        seen.add(nxt);
                        next.push([nxt, steps + 1]);
                    }
                }
            }
        }
        queue = next;
    }
    return -1;
}
