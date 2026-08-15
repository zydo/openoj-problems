class Solution {

    public int minCameraCover(TreeNode root) {
        int[] cameras = { 0 };
        if (dfs(root, cameras) == 0) {
            cameras[0]++;
        }
        return cameras[0];
    }

    // State: 0 = uncovered, 1 = has camera, 2 = covered.
    private int dfs(TreeNode node, int[] cameras) {
        if (node == null) {
            return 2;
        }
        int left = dfs(node.left, cameras);
        int right = dfs(node.right, cameras);
        if (left == 0 || right == 0) {
            cameras[0]++;
            return 1;
        }
        if (left == 1 || right == 1) {
            return 2;
        }
        return 0;
    }
}
