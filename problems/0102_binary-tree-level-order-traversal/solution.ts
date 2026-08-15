function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) {
        return [];
    }
    const result: number[][] = [];
    const queue: TreeNode[] = [root];
    while (queue.length > 0) {
        const size = queue.length;
        const level: number[] = [];
        for (let i = 0; i < size; i++) {
            const node = queue.shift()!;
            level.push(node.val);
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        result.push(level);
    }
    return result;
}
