/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function (root) {
    let total = 0;

    function reverseInorder(current) {
        if (current === null) {
            return;
        }
        reverseInorder(current.right);
        total += current.val;
        current.val = total;
        reverseInorder(current.left);
    }

    reverseInorder(root);
    return root;
};
