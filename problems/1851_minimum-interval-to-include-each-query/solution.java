import java.util.*;

class Solution {

    public int[] minInterval(int[][] intervals, int[] queries) {
        int[][] sorted = intervals.clone();
        Arrays.sort(sorted, (a, b) ->
            a[0] != b[0]
                ? Integer.compare(a[0], b[0])
                : Integer.compare(a[1], b[1])
        );
        Integer[] order = new Integer[queries.length];
        for (int j = 0; j < queries.length; j++) {
            order[j] = j;
        }
        Arrays.sort(order, (a, b) -> Integer.compare(queries[a], queries[b]));
        // Min-heap of [size, right] pairs ordered by size.
        PriorityQueue<int[]> heap = new PriorityQueue<>((a, b) ->
            Integer.compare(a[0], b[0])
        );
        int[] answers = new int[queries.length];
        int i = 0;
        int n = sorted.length;
        for (int j : order) {
            int q = queries[j];
            while (i < n && sorted[i][0] <= q) {
                heap.add(new int[] {
                    sorted[i][1] - sorted[i][0] + 1,
                    sorted[i][1],
                });
                i++;
            }
            while (!heap.isEmpty() && heap.peek()[1] < q) {
                heap.poll();
            }
            answers[j] = heap.isEmpty() ? -1 : heap.peek()[0];
        }
        return answers;
    }
}
