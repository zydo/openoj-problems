import java.util.Arrays;

class Solution {

    public int minTaps(int n, int[] ranges) {
        int total = ranges.length;
        int[][] intervals = new int[total][2];
        for (int i = 0; i < total; i++) {
            intervals[i][0] = Math.max(0, i - ranges[i]);
            intervals[i][1] = Math.min(n, i + ranges[i]);
        }
        Arrays.sort(intervals, (a, b) ->
            a[0] != b[0]
                ? Integer.compare(a[0], b[0])
                : Integer.compare(a[1], b[1])
        );
        int count = 0;
        int covered = 0;
        int i = 0;
        while (covered < n) {
            int reach = covered;
            while (i < total && intervals[i][0] <= covered) {
                reach = Math.max(reach, intervals[i][1]);
                i++;
            }
            if (reach == covered) {
                return -1;
            }
            covered = reach;
            count++;
        }
        return count;
    }
}
