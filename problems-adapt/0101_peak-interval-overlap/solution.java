import java.util.Arrays;
import java.util.PriorityQueue;

class Solution {

    public int peakOverlap(int[][] intervals) {
        if (intervals.length == 0) return 0;
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        PriorityQueue<Integer> heap = new PriorityQueue<>(); // end times of still-running intervals
        for (int[] interval : intervals) {
            int start = interval[0],
                end = interval[1];
            if (!heap.isEmpty() && heap.peek() <= start) {
                heap.poll();
                heap.offer(end);
            } else {
                heap.offer(end);
            }
        }
        return heap.size();
    }
}
