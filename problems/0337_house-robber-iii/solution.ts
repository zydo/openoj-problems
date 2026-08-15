function rob(root: TreeNode | null): number {
    function best(node: TreeNode | null): [number, number] {
        if (node === null) {
            return [0, 0];
        }
        const [leftRob, leftSkip] = best(node.left);
        const [rightRob, rightSkip] = best(node.right);
        const robHere = node.val + leftSkip + rightSkip;
        const skipHere =
            Math.max(leftRob, leftSkip) + Math.max(rightRob, rightSkip);
        return [robHere, skipHere];
    }
    const [robHere, skipHere] = best(root);
    return Math.max(robHere, skipHere);
}
