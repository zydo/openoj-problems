class Solution {

    public TreeNode bstToGst(TreeNode root) {
        int[] total = { 0 };
        reverseInorder(root, total);
        return root;
    }

    private void reverseInorder(TreeNode current, int[] total) {
        if (current == null) {
            return;
        }
        reverseInorder(current.right, total);
        total[0] += current.val;
        current.val = total[0];
        reverseInorder(current.left, total);
    }
}
