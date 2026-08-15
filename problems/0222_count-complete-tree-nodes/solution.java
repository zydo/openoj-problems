class Solution {

    private int depth(TreeNode node, boolean left) {
        int d = 0;
        while (node != null) {
            d += 1;
            node = left ? node.left : node.right;
        }
        return d;
    }

    public int countNodes(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int leftDepth = depth(root, true);
        int rightDepth = depth(root, false);
        if (leftDepth == rightDepth) {
            return (1 << leftDepth) - 1;
        }
        return 1 + countNodes(root.left) + countNodes(root.right);
    }
}
