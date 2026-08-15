import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;

class Solution {

    public long totalCost(int[] costs, int k, int candidates) {
        int n = costs.length;
        Comparator<int[]> cmp = (a, b) ->
            a[0] != b[0]
                ? Integer.compare(a[0], b[0])
                : Integer.compare(a[1], b[1]);
        if (2 * candidates >= n) {
            int[] sorted = costs.clone();
            Arrays.sort(sorted);
            long total = 0;
            for (int i = 0; i < k; i++) total += sorted[i];
            return total;
        }
        PriorityQueue<int[]> left = new PriorityQueue<>(cmp);
        PriorityQueue<int[]> right = new PriorityQueue<>(cmp);
        for (int i = 0; i < candidates; i++) left.add(new int[] {
            costs[i],
            i,
        });
        for (int i = n - candidates; i < n; i++) right.add(new int[] {
            costs[i],
            i,
        });
        int i = candidates,
            j = n - candidates - 1;
        long total = 0;
        for (int t = 0; t < k; t++) {
            if (
                right.isEmpty() ||
                (!left.isEmpty() && cmp.compare(left.peek(), right.peek()) <= 0)
            ) {
                int[] top = left.poll();
                total += top[0];
                if (i <= j) {
                    left.add(new int[] { costs[i], i });
                    i++;
                }
            } else {
                int[] top = right.poll();
                total += top[0];
                if (i <= j) {
                    right.add(new int[] { costs[j], j });
                    j--;
                }
            }
        }
        return total;
    }
}
