function lowestCommonAncestor(
    root: TreeNode | null,
    p: number,
    q: number,
): number {
    function find(node: TreeNode | null): TreeNode | null {
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
    return find(root)!.val;
}
