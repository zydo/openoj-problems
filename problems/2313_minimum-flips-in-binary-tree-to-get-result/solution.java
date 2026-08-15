import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {

    public int minimumFlips(TreeNode root, boolean result) {
        if (root == null) return 0;
        List<TreeNode> order = new ArrayList<>();
        Deque<TreeNode> queue = new ArrayDeque<>();
        queue.add(root);
        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            order.add(node);
            if (node.left != null) queue.add(node.left);
            if (node.right != null) queue.add(node.right);
        }
        int n = order.size();
        Map<TreeNode, Integer> idx = new HashMap<>();
        for (int i = 0; i < n; i++) idx.put(order.get(i), i);
        int[] t = new int[n];
        int[] f = new int[n];
        for (int i = n - 1; i >= 0; i--) {
            TreeNode node = order.get(i);
            int v = node.val;
            if (node.left == null && node.right == null) {
                if (v == 1) {
                    t[i] = 0;
                    f[i] = 1;
                } else {
                    t[i] = 1;
                    f[i] = 0;
                }
            } else if (v == 5) {
                TreeNode child = node.left != null ? node.left : node.right;
                int ci = idx.get(child);
                t[i] = f[ci];
                f[i] = t[ci];
            } else {
                int li = idx.get(node.left);
                int ri = idx.get(node.right);
                int lt = t[li],
                    lf = f[li],
                    rt = t[ri],
                    rf = f[ri];
                if (v == 2) {
                    t[i] = Math.min(lt, rt);
                    f[i] = lf + rf;
                } else if (v == 3) {
                    t[i] = lt + rt;
                    f[i] = Math.min(lf, rf);
                } else {
                    t[i] = Math.min(lt + rf, lf + rt);
                    f[i] = Math.min(lt + rt, lf + rf);
                }
            }
        }
        int rootIdx = idx.get(root);
        return result ? t[rootIdx] : f[rootIdx];
    }
}
