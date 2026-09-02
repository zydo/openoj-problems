class Solution {

    public boolean carriesChildSum(TreeNode root) {
        return root.val == root.left.val + root.right.val;
    }
}
