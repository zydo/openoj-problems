class Solution {

    public int rob(TreeNode root) {
        int[] best = best(root);
        return Math.max(best[0], best[1]);
    }

    private int[] best(TreeNode node) {
        if (node == null) {
            return new int[] { 0, 0 };
        }
        int[] left = best(node.left);
        int[] right = best(node.right);
        int robHere = node.val + left[1] + right[1];
        int skipHere =
            Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        return new int[] { robHere, skipHere };
    }
}
