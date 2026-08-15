class Solution {

    public long maximumValueSum(int[] nums, int k, int[][] edges) {
        long base = 0;
        int posCount = 0;
        long minPos = Long.MAX_VALUE;
        long maxNonPos = Long.MIN_VALUE;
        boolean hasPos = false;
        boolean hasNonPos = false;
        for (int x : nums) {
            long d = (long) (x ^ k) - x;
            base += x;
            if (d > 0) {
                posCount++;
                base += d;
                if (d < minPos) {
                    minPos = d;
                }
                hasPos = true;
            } else {
                if (d > maxNonPos) {
                    maxNonPos = d;
                }
                hasNonPos = true;
            }
        }
        if (posCount % 2 == 0) {
            return base;
        }
        long best = Long.MAX_VALUE;
        if (hasPos) {
            best = minPos;
        }
        if (hasNonPos) {
            long penalty = -maxNonPos;
            if (penalty < best) {
                best = penalty;
            }
        }
        return base - best;
    }
}
