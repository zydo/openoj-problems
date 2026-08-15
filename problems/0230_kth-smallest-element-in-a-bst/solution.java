import java.util.ArrayDeque;
import java.util.Deque;

class Solution {

    public int kthSmallest(TreeNode root, int k) {
        Deque<TreeNode> stack = new ArrayDeque<>();
        TreeNode node = root;
        while (node != null || !stack.isEmpty()) {
            while (node != null) {
                stack.push(node);
                node = node.left;
            }
            node = stack.pop();
            k--;
            if (k == 0) {
                return node.val;
            }
            node = node.right;
        }
        return -1;
    }
}
