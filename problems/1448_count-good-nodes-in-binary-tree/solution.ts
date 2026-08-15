function goodNodes(root: TreeNode | null): number {
    let count = 0;
    const stack: Array<[TreeNode, number]> = [[root, root.val]];
    while (stack.length > 0) {
        const [node, maxSoFar] = stack.pop()!;
        let currentMax = maxSoFar;
        if (node.val >= currentMax) {
            count += 1;
            currentMax = node.val;
        }
        if (node.left !== null) {
            stack.push([node.left, currentMax]);
        }
        if (node.right !== null) {
            stack.push([node.right, currentMax]);
        }
    }
    return count;
}
