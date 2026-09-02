/**
 * @param {string[]} tokens
 * @return {number}
 */
var finalTally = function (tokens) {
    let value = 0;
    for (const operation of tokens) {
        value += operation[1] === "+" ? 1 : -1;
    }
    return value;
};
