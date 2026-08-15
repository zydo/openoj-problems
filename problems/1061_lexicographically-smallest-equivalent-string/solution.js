/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function (s1, s2, baseStr) {
    const parent = new Array(26).fill(0).map((_, i) => i);
    const find = (a) => {
        while (parent[a] !== a) {
            parent[a] = parent[parent[a]];
            a = parent[a];
        }
        return a;
    };
    for (let i = 0; i < s1.length; i++) {
        let ra = find(s1.charCodeAt(i) - 97);
        let rb = find(s2.charCodeAt(i) - 97);
        if (ra !== rb) {
            if (rb < ra) {
                const t = ra;
                ra = rb;
                rb = t;
            }
            parent[rb] = ra;
        }
    }
    let out = "";
    for (let i = 0; i < baseStr.length; i++) {
        out += String.fromCharCode(97 + find(baseStr.charCodeAt(i) - 97));
    }
    return out;
};
