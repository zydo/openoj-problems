function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;

    function height(node: TreeNode | null): number {
        if (node === null) {
            return 0;
        }
        const left = height(node.left);
        const right = height(node.right);
        if (left + right > diameter) {
            diameter = left + right;
        }
        return 1 + Math.max(left, right);
    }

    height(root);
    return diameter;
}
