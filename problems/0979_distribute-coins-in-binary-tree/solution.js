/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function (root) {
    let moves = 0;

    function dfs(node) {
        if (node === null) {
            return 0;
        }
        const left = dfs(node.left);
        const right = dfs(node.right);
        moves += Math.abs(left) + Math.abs(right);
        return node.val + left + right - 1;
    }

    dfs(root);
    return moves;
};
