/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
    const removePairs = (text, first, second, points) => {
        const stack = [];
        let score = 0;
        for (const c of text) {
            if (
                stack.length &&
                stack[stack.length - 1] === first &&
                c === second
            ) {
                stack.pop();
                score += points;
            } else {
                stack.push(c);
            }
        }
        return [stack.join(""), score];
    };
    if (x >= y) {
        const [rest, score1] = removePairs(s, "a", "b", x);
        const [, score2] = removePairs(rest, "b", "a", y);
        return score1 + score2;
    }
    const [rest, score1] = removePairs(s, "b", "a", y);
    const [, score2] = removePairs(rest, "a", "b", x);
    return score1 + score2;
};
