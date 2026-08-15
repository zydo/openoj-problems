class Solution {

    public int diameterOfBinaryTree(TreeNode root) {
        int[] diameter = { 0 };
        height(root, diameter);
        return diameter[0];
    }

    private int height(TreeNode node, int[] diameter) {
        if (node == null) {
            return 0;
        }
        int left = height(node.left, diameter);
        int right = height(node.right, diameter);
        if (left + right > diameter[0]) {
            diameter[0] = left + right;
        }
        return 1 + Math.max(left, right);
    }
}
