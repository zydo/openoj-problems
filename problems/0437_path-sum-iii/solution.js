/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    const counter = new Map([[0, 1]]);

    const dfs = (node, running) => {
        if (node === null) {
            return 0;
        }
        running += node.val;
        let total = counter.get(running - targetSum) || 0;
        counter.set(running, (counter.get(running) || 0) + 1);
        total += dfs(node.left, running);
        total += dfs(node.right, running);
        counter.set(running, counter.get(running) - 1);
        return total;
    };

    return dfs(root, 0);
};
