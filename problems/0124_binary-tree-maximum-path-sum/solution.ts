function maxPathSum(root: TreeNode | null): number {
    let best = -Infinity;

    function gain(node: TreeNode | null): number {
        if (node === null) {
            return 0;
        }
        const left = Math.max(gain(node.left), 0);
        const right = Math.max(gain(node.right), 0);
        best = Math.max(best, node.val + left + right);
        return node.val + Math.max(left, right);
    }

    gain(root);
    return best;
}
