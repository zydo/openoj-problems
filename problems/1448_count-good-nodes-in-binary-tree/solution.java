class Solution {

    public int goodNodes(TreeNode root) {
        return dfs(root, root.val);
    }

    private int dfs(TreeNode node, int maxSoFar) {
        if (node == null) {
            return 0;
        }
        int count = 0;
        if (node.val >= maxSoFar) {
            count = 1;
            maxSoFar = node.val;
        }
        return count + dfs(node.left, maxSoFar) + dfs(node.right, maxSoFar);
    }
}
