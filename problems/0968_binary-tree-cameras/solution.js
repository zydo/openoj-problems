/**
 * @param {TreeNode} root
 * @return {number}
 */
var minCameraCover = function (root) {
    let cameras = 0;

    function dfs(node) {
        if (node === null) {
            return 2;
        }
        const left = dfs(node.left);
        const right = dfs(node.right);
        if (left === 0 || right === 0) {
            cameras += 1;
            return 1;
        }
        if (left === 1 || right === 1) {
            return 2;
        }
        return 0;
    }

    if (dfs(root) === 0) {
        cameras += 1;
    }
    return cameras;
};
