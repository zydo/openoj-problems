import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

class Solution {

    public TreeNode balanceBST(TreeNode root) {
        List<Integer> values = new ArrayList<>();
        Deque<TreeNode> stack = new ArrayDeque<>();
        TreeNode current = root;
        while (!stack.isEmpty() || current != null) {
            while (current != null) {
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            values.add(current.val);
            current = current.right;
        }
        return build(values, 0, values.size() - 1);
    }

    private TreeNode build(List<Integer> values, int lo, int hi) {
        if (lo > hi) {
            return null;
        }
        int mid = lo + (hi - lo) / 2;
        TreeNode node = new TreeNode(values.get(mid));
        node.left = build(values, lo, mid - 1);
        node.right = build(values, mid + 1, hi);
        return node;
    }
}
