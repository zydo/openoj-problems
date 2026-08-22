import java.util.Arrays;

class Solution {

    public int minCoveringPositions(int[][] intervals) {
        // Position-cover greedy: sort by right endpoint and place a position at the
        // right end of the first uncovered interval — among the positions
        // covering it, the right endpoint reaches every interval that any
        // earlier position could.
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));
        int chosen = 0;
        // Sentinel below any coordinate (coordinates span signed 32-bit).
        long lastPosition = Long.MIN_VALUE;
        for (int[] interval : intervals) {
            // Strict >: intervals are closed, so start == lastPosition is
            // already covered; otherwise place a position at the earliest end remaining.
            if (interval[0] > lastPosition) {
                chosen++;
                lastPosition = interval[1];
            }
        }
        return chosen;
    }
}
