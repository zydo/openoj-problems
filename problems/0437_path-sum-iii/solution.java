import java.util.HashMap;
import java.util.Map;

class Solution {

    public int pathSum(TreeNode root, int targetSum) {
        Map<Long, Long> counter = new HashMap<>();
        counter.put(0L, 1L);
        return (int) dfs(root, 0L, targetSum, counter);
    }

    private long dfs(
        TreeNode node,
        long running,
        int targetSum,
        Map<Long, Long> counter
    ) {
        if (node == null) {
            return 0;
        }
        running += node.val;
        long total = counter.getOrDefault(running - targetSum, 0L);
        counter.merge(running, 1L, Long::sum);
        total += dfs(node.left, running, targetSum, counter);
        total += dfs(node.right, running, targetSum, counter);
        counter.merge(running, -1L, Long::sum);
        return total;
    }
}
