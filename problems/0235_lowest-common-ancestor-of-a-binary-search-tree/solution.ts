function lowestCommonAncestor(
    root: TreeNode | null,
    p: number,
    q: number,
): number {
    let node: TreeNode | null = root;
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
}
