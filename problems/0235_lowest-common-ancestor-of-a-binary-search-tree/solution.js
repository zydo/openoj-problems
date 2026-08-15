/**
 * @param {TreeNode} root
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var lowestCommonAncestor = function (root, p, q) {
    let node = root;
    while (node) {
        if (p < node.val && q < node.val) {
            node = node.left;
        } else if (p > node.val && q > node.val) {
            node = node.right;
        } else {
            return node.val;
        }
    }
    return -1;
};
