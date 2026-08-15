import java.util.Arrays;

class Solution {

    public int jobScheduling(int[] startTime, int[] endTime, int[] profit) {
        int n = startTime.length;
        int[][] jobs = new int[n][3];
        for (int i = 0; i < n; i++) {
            jobs[i][0] = endTime[i];
            jobs[i][1] = startTime[i];
            jobs[i][2] = profit[i];
        }
        Arrays.sort(jobs, (a, b) -> {
            if (a[0] != b[0]) return Integer.compare(a[0], b[0]);
            if (a[1] != b[1]) return Integer.compare(a[1], b[1]);
            return Integer.compare(a[2], b[2]);
        });
        int[] ends = new int[n];
        for (int i = 0; i < n; i++) ends[i] = jobs[i][0];

        long[] best = new long[n + 1];
        for (int i = 1; i <= n; i++) {
            int[] job = jobs[i - 1];
            int j = bisectRight(ends, job[1], i - 1);
            best[i] = Math.max(best[i - 1], best[j] + job[2]);
        }
        return (int) best[n];
    }

    private int bisectRight(int[] values, int target, int hi) {
        int lo = 0;
        while (lo < hi) {
            int mid = (lo + hi) >>> 1;
            if (values[mid] <= target) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        return lo;
    }
}
