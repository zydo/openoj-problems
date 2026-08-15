/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
    let index = 0;

    function build(low, high) {
        if (index === preorder.length) {
            return null;
        }
        const value = preorder[index];
        if (value < low || value > high) {
            return null;
        }
        index++;
        const node = new TreeNode(value);
        node.left = build(low, value - 1);
        node.right = build(value + 1, high);
        return node;
    }

    return build(-Infinity, Infinity);
};
