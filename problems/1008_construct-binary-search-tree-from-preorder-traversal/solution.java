class Solution {

    public TreeNode bstFromPreorder(int[] preorder) {
        int[] index = { 0 };
        return build(preorder, index, Long.MIN_VALUE, Long.MAX_VALUE);
    }

    private TreeNode build(int[] preorder, int[] index, long low, long high) {
        if (index[0] == preorder.length) {
            return null;
        }
        int value = preorder[index[0]];
        if (value < low || value > high) {
            return null;
        }
        index[0]++;
        TreeNode node = new TreeNode(value);
        node.left = build(preorder, index, low, (long) value - 1);
        node.right = build(preorder, index, (long) value + 1, high);
        return node;
    }
}
