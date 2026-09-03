import java.util.Arrays;

class Solution {

    public long splitScheduleTime(int[] jobs, int splitTime) {
        // The splitting process is a full binary tree: a leaf at depth d is
        // a worker that starts working at d * splitTime. Deadline T is
        // reachable iff job i can sit on a leaf of depth
        // d <= (T - jobs[i]) / splitTime, and legal leaf-depth multisets
        // are exactly the Kraft-legal ones (sum 2^-d <= 1) -- minimized by
        // taking every job at its full depth bound. Binary search the
        // minimal T. Deadlines reach ~1e14, so all arithmetic is long.
        int n = jobs.length;
        int mx = Arrays.stream(jobs).max().orElseThrow();
        long lo = (long) mx + splitTime;
        long hi = (long) mx + (long) (n - 1) * splitTime;
        int[] time = jobs;
        int s = splitTime;

        while (lo < hi) {
            long mid = lo + (hi - lo) / 2;
            int slots = 0;
            int deep = 0;
            boolean ok = true;
            for (int t : time) {
                long d = (mid - t) / s;
                if (d < 1) {
                    ok = false;
                    break;
                }
                if (d > 30) {
                    // bounds past depth 30 fit together in less than one
                    // 2^-30 unit of slack (n < 2^17 jobs), so count all
                    // of them as a single unit
                    deep = 1;
                } else {
                    slots += 1 << (30 - (int) d);
                    if (slots > 1 << 30) {
                        ok = false;
                        break;
                    }
                }
            }
            if (ok && slots + deep <= 1 << 30) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }
}
