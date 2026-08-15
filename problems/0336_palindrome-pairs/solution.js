/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
    const index = new Map();
    for (let i = 0; i < words.length; i++) {
        index.set(words[i], i);
    }
    const results = new Set();

    const isPalindrome = function (s) {
        let a = 0,
            b = s.length - 1;
        while (a < b) {
            if (s.charAt(a) !== s.charAt(b)) return false;
            a++;
            b--;
        }
        return true;
    };
    const reverse = function (s) {
        return s.split("").reverse().join("");
    };

    for (let j = 0; j < words.length; j++) {
        const w = words[j];
        const length = w.length;
        for (let cut = 0; cut <= length; cut++) {
            const prefix = w.slice(0, cut);
            const suffix = w.slice(cut);
            if (isPalindrome(prefix)) {
                const rev = reverse(suffix);
                if (index.has(rev) && index.get(rev) !== j) {
                    results.add(index.get(rev) + "," + j);
                }
            }
            if (cut !== length && isPalindrome(suffix)) {
                const rev = reverse(prefix);
                if (index.has(rev) && index.get(rev) !== j) {
                    results.add(j + "," + index.get(rev));
                }
            }
        }
    }
    const out = [];
    results.forEach(function (key) {
        const parts = key.split(",");
        out.push([Number(parts[0]), Number(parts[1])]);
    });
    out.sort(function (a, b) {
        return a[0] - b[0] || a[1] - b[1];
    });
    return out;
};
