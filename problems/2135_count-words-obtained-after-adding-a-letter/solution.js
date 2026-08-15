/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
var wordCount = function (startWords, targetWords) {
    const mask = (w) => {
        let m = 0;
        for (let i = 0; i < w.length; i++) {
            m |= 1 << (w.charCodeAt(i) - 97);
        }
        return m;
    };

    const starts = new Set(startWords.map(mask));
    let count = 0;
    for (const t of targetWords) {
        const m = mask(t);
        for (let bit = 0; bit < 26; bit++) {
            if (m & (1 << bit) && starts.has(m ^ (1 << bit))) {
                count++;
                break;
            }
        }
    }
    return count;
};
