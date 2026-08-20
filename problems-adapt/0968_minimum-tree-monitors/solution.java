class Solution {

    public int minimumTreeMonitors(TreeNode root) {
        int[] monitors = { 0 };
        if (dfs(root, monitors) == 0) {
            monitors[0]++;
        }
        return monitors[0];
    }

    // State: 0 = uncovered, 1 = has monitor, 2 = covered.
    private int dfs(TreeNode node, int[] monitors) {
        if (node == null) {
            // Null reports covered so leaves start uncovered and push
            // the first monitor one level up.
            return 2;
        }
        int left = dfs(node.left, monitors);
        int right = dfs(node.right, monitors);
        if (left == 0 || right == 0) {
            // An uncovered child forces a monitor here — the parent of
            // an uncovered node is always the best placement.
            monitors[0]++;
            return 1;
        }
        if (left == 1 || right == 1) {
            return 2;
        }
        return 0;
    }
}
