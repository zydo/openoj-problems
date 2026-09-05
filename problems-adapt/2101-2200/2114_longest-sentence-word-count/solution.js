/**
 * @param {string[]} sentences
 * @return {number}
 */
var maxWordCount = function (sentences) {
    let maximum = 0;
    for (const sentence of sentences) {
        let words = 1;
        for (const character of sentence) {
            if (character === " ") {
                words++;
            }
        }
        maximum = Math.max(maximum, words);
    }
    return maximum;
};
