class Solution {

    public int maxPathSum(TreeNode root) {
        long[] best = { Long.MIN_VALUE };
        gain(root, best);
        return (int) best[0];
    }

    private long gain(TreeNode node, long[] best) {
        if (node == null) {
            return 0;
        }
        long left = Math.max(gain(node.left, best), 0);
        long right = Math.max(gain(node.right, best), 0);
        best[0] = Math.max(best[0], (long) node.val + left + right);
        return node.val + Math.max(left, right);
    }
}
