/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
    let count = 0;
    const stack = [[root, root.val]];
    while (stack.length > 0) {
        const [node, maxSoFar] = stack.pop();
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
};
