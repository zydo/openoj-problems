/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
    const dead = new Set(deadends);
    const start = "0000";
    if (dead.has(start)) return -1;
    const seen = new Set([start]);
    let queue = [[start, 0]];
    while (queue.length > 0) {
        const next = [];
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
};
