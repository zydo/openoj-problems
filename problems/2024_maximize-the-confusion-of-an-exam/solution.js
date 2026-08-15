/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
    let t = 0,
        f = 0;
    let left = 0;
    let best = 0;
    for (let right = 0; right < answerKey.length; right++) {
        if (answerKey[right] === "T") t++;
        else f++;
        while (Math.min(t, f) > k) {
            if (answerKey[left] === "T") t--;
            else f--;
            left++;
        }
        const w = right - left + 1;
        if (w > best) best = w;
    }
    return best;
};
