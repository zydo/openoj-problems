/**
 * @param {TreeNode} root
 * @return {number}
 */
var minimumTreeMonitors = function (root) {
    let monitors = 0;

    function dfs(node) {
        // States: 0 = uncovered, 1 = has a monitor, 2 = covered.
        if (node === null) {
            // Null reports covered so leaves start uncovered and push
            // the first monitor one level up.
            return 2;
        }
        const left = dfs(node.left);
        const right = dfs(node.right);
        if (left === 0 || right === 0) {
            // An uncovered child forces a monitor here — the parent of
            // an uncovered node is always the best placement.
            monitors += 1;
            return 1;
        }
        if (left === 1 || right === 1) {
            return 2;
        }
        return 0;
    }

    if (dfs(root) === 0) {
        monitors += 1;
    }
    return monitors;
};
