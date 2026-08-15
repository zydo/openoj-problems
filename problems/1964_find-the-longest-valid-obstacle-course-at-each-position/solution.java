class Solution {

    public int[] longestObstacleCourseAtEachPosition(int[] obstacles) {
        int n = obstacles.length;
        int[] tails = new int[n];
        int len = 0;
        int[] ans = new int[n];
        for (int idx = 0; idx < n; idx++) {
            int x = obstacles[idx];
            int lo = 0,
                hi = len;
            while (lo < hi) {
                int mid = (lo + hi) >>> 1;
                if (tails[mid] <= x) lo = mid + 1;
                else hi = mid;
            }
            tails[lo] = x;
            if (lo == len) len++;
            ans[idx] = lo + 1;
        }
        return ans;
    }
}
