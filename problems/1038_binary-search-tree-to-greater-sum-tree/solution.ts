function bstToGst(root: TreeNode | null): TreeNode | null {
    let total = 0;

    function reverseInorder(current: TreeNode | null): void {
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
}
