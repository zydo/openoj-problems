function pathSum(root: TreeNode | null, targetSum: number): number {
    const counter = new Map<number, number>([[0, 1]]);

    const dfs = (node: TreeNode | null, running: number): number => {
        if (node === null) {
            return 0;
        }
        running += node.val;
        let total = counter.get(running - targetSum) || 0;
        counter.set(running, (counter.get(running) || 0) + 1);
        total += dfs(node.left, running);
        total += dfs(node.right, running);
        counter.set(running, counter.get(running)! - 1);
        return total;
    };

    return dfs(root, 0);
}
