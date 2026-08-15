/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    const parent = new Map();

    const find = function (node) {
        let root = node;
        while (parent.get(root) !== root) {
            root = parent.get(root);
        }
        while (parent.get(node) !== root) {
            const next = parent.get(node);
            parent.set(node, root);
            node = next;
        }
        return root;
    };

    const union = function (a, b) {
        if (!parent.has(a)) {
            parent.set(a, a);
        }
        if (!parent.has(b)) {
            parent.set(b, b);
        }
        const ra = find(a);
        const rb = find(b);
        if (ra === rb) {
            return false;
        }
        parent.set(ra, rb);
        return true;
    };

    for (const [a, b] of edges) {
        if (!union(a, b)) {
            return [a, b];
        }
    }
    return [];
};
