/**
 * @param {TreeNode} root
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var lowestCommonAncestor = function (root, p, q) {
    function find(node) {
        if (node === null || node.val === p || node.val === q) {
            return node;
        }
        const left = find(node.left);
        const right = find(node.right);
        if (left !== null && right !== null) {
            return node;
        }
        return left !== null ? left : right;
    }
    return find(root).val;
};
