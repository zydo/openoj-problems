/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
    const s = [];
    const t = [];
    for (let i = 0; i < start.length; i++) {
        if (start[i] !== "_") s.push([i, start[i]]);
    }
    for (let i = 0; i < target.length; i++) {
        if (target[i] !== "_") t.push([i, target[i]]);
    }
    if (s.length !== t.length) return false;
    for (let p = 0; p < s.length; p++) {
        const i = s[p][0],
            ci = s[p][1];
        const j = t[p][0],
            cj = t[p][1];
        if (ci !== cj) return false;
        if (ci === "L" && i < j) return false;
        if (ci === "R" && i > j) return false;
    }
    return true;
};
