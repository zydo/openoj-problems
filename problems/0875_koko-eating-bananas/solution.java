class Solution {

    public int minEatingSpeed(int[] piles, int h) {
        int lo = 1;
        int hi = 0;
        for (int pile : piles) {
            hi = Math.max(hi, pile);
        }
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (hoursNeeded(piles, mid) <= h) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }

    private long hoursNeeded(int[] piles, int k) {
        long total = 0;
        for (int pile : piles) {
            total += (pile + (long) k - 1) / k;
        }
        return total;
    }
}
