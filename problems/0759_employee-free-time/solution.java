import java.util.ArrayList;
import java.util.List;

class Solution {

    public int[][] employeeFreeTime(int[][][] schedule) {
        List<int[]> intervals = new ArrayList<>();
        for (int[][] employee : schedule) {
            for (int[] interval : employee) {
                intervals.add(interval);
            }
        }
        intervals.sort((a, b) ->
            a[0] != b[0]
                ? Integer.compare(a[0], b[0])
                : Integer.compare(a[1], b[1])
        );
        List<int[]> free = new ArrayList<>();
        boolean started = false;
        int previousEnd = 0;
        for (int[] interval : intervals) {
            if (started && interval[0] > previousEnd) {
                free.add(new int[] { previousEnd, interval[0] });
            }
            previousEnd = !started
                ? interval[1]
                : Math.max(previousEnd, interval[1]);
            started = true;
        }
        return free.toArray(new int[0][]);
    }
}
