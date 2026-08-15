/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {
    const ordered = meetings
        .map((m, i) => [m[0], m[1], i])
        .sort((a, b) => a[0] - b[0] || a[2] - b[2]);
    const endTime = new Array(n).fill(-1);
    const count = new Array(n).fill(0);
    for (const [s, e] of ordered) {
        let room = -1;
        for (let i = 0; i < n; i++) {
            if (endTime[i] <= s) {
                room = i;
                break;
            }
        }
        if (room === -1) {
            room = 0;
            for (let i = 1; i < n; i++) {
                if (endTime[i] < endTime[room]) {
                    room = i;
                }
            }
            endTime[room] += e - s;
        } else {
            endTime[room] = e;
        }
        count[room]++;
    }
    let best = 0;
    for (let i = 1; i < n; i++) {
        if (count[i] > count[best]) best = i;
    }
    return best;
};
