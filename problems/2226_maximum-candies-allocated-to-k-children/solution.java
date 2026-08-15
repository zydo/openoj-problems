class Solution {

    public int maximumCandies(int[] candies, long k) {
        int lo = 0,
            hi = 0;
        for (int p : candies) {
            hi = Math.max(hi, p);
        }
        while (lo < hi) {
            int mid = lo + (hi - lo + 1) / 2;
            if (can(candies, mid, k)) {
                lo = mid;
            } else {
                hi = mid - 1;
            }
        }
        return lo;
    }

    private boolean can(int[] candies, int c, long k) {
        if (c == 0) {
            return true;
        }
        long cnt = 0;
        for (int p : candies) {
            cnt += p / c;
            if (cnt >= k) {
                return true;
            }
        }
        return cnt >= k;
    }
}
