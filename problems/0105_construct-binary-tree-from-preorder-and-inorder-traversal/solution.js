/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const index = new Map();
    for (let i = 0; i < inorder.length; i++) {
        index.set(inorder[i], i);
    }
    let position = 0;

    const build = (low, high) => {
        if (low >= high) return null;
        const value = preorder[position];
        position++;
        const node = new TreeNode(value);
        const mid = index.get(value);
        node.left = build(low, mid);
        node.right = build(mid + 1, high);
        return node;
    };

    return build(0, inorder.length);
};
