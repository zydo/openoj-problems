import java.util.ArrayDeque;
import java.util.Deque;

class Solution {

    public int[][] closestNodes(TreeNode root, int[] queries) {
        int[] values = new int[100001];
        int n = 0;
        Deque<TreeNode> stack = new ArrayDeque<>();
        TreeNode current = root;
        while (current != null || !stack.isEmpty()) {
            while (current != null) {
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            values[n++] = current.val;
            current = current.right;
        }

        int[][] answer = new int[queries.length][2];
        for (int q = 0; q < queries.length; q++) {
            int query = queries[q];
            int lower = bisectLeft(values, n, query);
            int upper = bisectLeft(values, n, query + 1);
            int minimum = upper > 0 ? values[upper - 1] : -1;
            int maximum = lower < n ? values[lower] : -1;
            answer[q][0] = minimum;
            answer[q][1] = maximum;
        }
        return answer;
    }

    private int bisectLeft(int[] values, int n, int target) {
        int lo = 0;
        int hi = n;
        while (lo < hi) {
            int mid = (lo + hi) >>> 1;
            if (values[mid] < target) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        return lo;
    }
}
