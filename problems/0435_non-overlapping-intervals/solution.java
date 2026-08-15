import java.util.Arrays;

class Solution {

    public int eraseOverlapIntervals(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));
        int removed = 0;
        long prevEnd = Long.MIN_VALUE;
        for (int[] interval : intervals) {
            if (interval[0] >= prevEnd) {
                prevEnd = interval[1];
            } else {
                removed++;
            }
        }
        return removed;
    }
}
