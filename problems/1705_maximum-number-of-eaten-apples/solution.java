import java.util.PriorityQueue;

class Solution {

    public int eatenApples(int[] apples, int[] days) {
        int n = apples.length;
        PriorityQueue<int[]> heap = new PriorityQueue<>((a, b) ->
            a[0] != b[0]
                ? Integer.compare(a[0], b[0])
                : Integer.compare(a[1], b[1])
        );
        int eaten = 0;
        for (int i = 0; i < n; i++) {
            if (apples[i] > 0) {
                heap.add(new int[] { i + days[i], apples[i] });
            }
            while (!heap.isEmpty() && heap.peek()[0] <= i) {
                heap.poll();
            }
            if (!heap.isEmpty()) {
                int[] item = heap.poll();
                eaten++;
                if (item[1] > 1) {
                    heap.add(new int[] { item[0], item[1] - 1 });
                }
            }
        }
        int day = n;
        while (!heap.isEmpty()) {
            while (!heap.isEmpty() && heap.peek()[0] <= day) {
                heap.poll();
            }
            if (heap.isEmpty()) {
                break;
            }
            int[] item = heap.poll();
            eaten++;
            if (item[1] > 1) {
                heap.add(new int[] { item[0], item[1] - 1 });
            }
            day++;
        }
        return eaten;
    }
}
