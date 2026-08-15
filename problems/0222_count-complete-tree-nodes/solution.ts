function countNodes(root: TreeNode | null): number {
    const depth = function (node: TreeNode | null, left: boolean): number {
        let d = 0;
        while (node !== null) {
            d += 1;
            node = left ? node.left : node.right;
        }
        return d;
    };

    if (root === null) {
        return 0;
    }
    const leftDepth = depth(root, true);
    const rightDepth = depth(root, false);
    if (leftDepth === rightDepth) {
        return (1 << leftDepth) - 1;
    }
    return 1 + countNodes(root.left) + countNodes(root.right);
}
