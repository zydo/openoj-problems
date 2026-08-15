class Solution {

    public TreeNode deleteNode(TreeNode root, int key) {
        return delete(root, key);
    }

    private TreeNode delete(TreeNode node, int key) {
        if (node == null) {
            return null;
        }
        if (key < node.val) {
            node.left = delete(node.left, key);
        } else if (key > node.val) {
            node.right = delete(node.right, key);
        } else {
            if (node.left == null) {
                return node.right;
            }
            if (node.right == null) {
                return node.left;
            }
            TreeNode successor = node.right;
            while (successor.left != null) {
                successor = successor.left;
            }
            node.val = successor.val;
            node.right = delete(node.right, successor.val);
        }
        return node;
    }
}
