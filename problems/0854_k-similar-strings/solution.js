/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var kSimilarity = function (s1, s2) {
    const queue = [[s1, 0]];
    const seen = new Set([s1]);
    let head = 0;
    while (head < queue.length) {
        const [s, steps] = queue[head++];
        if (s === s2) {
            return steps;
        }
        let i = 0;
        while (s[i] === s2[i]) {
            i++;
        }
        const arr = s.split("");
        for (let j = i + 1; j < s.length; j++) {
            if (s[j] === s2[i] && s[j] !== s2[j]) {
                arr[i] = s[j];
                arr[j] = s[i];
                const ns = arr.join("");
                arr[i] = s[i];
                arr[j] = s[j];
                if (!seen.has(ns)) {
                    seen.add(ns);
                    queue.push([ns, steps + 1]);
                }
            }
        }
    }
    return -1;
};
