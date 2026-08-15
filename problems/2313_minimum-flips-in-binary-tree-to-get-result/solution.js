/**
 * @param {TreeNode} root
 * @param {boolean} result
 * @return {number}
 */
var minimumFlips = function (root, result) {
    if (root === null) return 0;
    const order = [root];
    for (let head = 0; head < order.length; head++) {
        const node = order[head];
        if (node.left) order.push(node.left);
        if (node.right) order.push(node.right);
    }
    const idx = new Map();
    order.forEach((node, i) => idx.set(node, i));
    const n = order.length;
    const t = new Array(n).fill(0);
    const f = new Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        const node = order[i];
        const v = node.val;
        if (!node.left && !node.right) {
            if (v === 1) {
                t[i] = 0;
                f[i] = 1;
            } else {
                t[i] = 1;
                f[i] = 0;
            }
        } else if (v === 5) {
            const child = node.left ? node.left : node.right;
            const ci = idx.get(child);
            t[i] = f[ci];
            f[i] = t[ci];
        } else {
            const li = idx.get(node.left);
            const ri = idx.get(node.right);
            const lt = t[li],
                lf = f[li],
                rt = t[ri],
                rf = f[ri];
            if (v === 2) {
                t[i] = Math.min(lt, rt);
                f[i] = lf + rf;
            } else if (v === 3) {
                t[i] = lt + rt;
                f[i] = Math.min(lf, rf);
            } else {
                t[i] = Math.min(lt + rf, lf + rt);
                f[i] = Math.min(lt + rt, lf + rf);
            }
        }
    }
    const rootIdx = idx.get(root);
    return result ? t[rootIdx] : f[rootIdx];
};
