import java.util.Arrays;

class Solution {

    public int smallestDistancePair(int[] nums, int k) {
        int[] sorted = nums.clone();
        Arrays.sort(sorted);
        int n = sorted.length;
        int lo = 0;
        int hi = sorted[n - 1] - sorted[0];
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (countLe(sorted, mid) >= k) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }

    private long countLe(int[] nums, int dist) {
        long cnt = 0;
        int j = 0;
        for (int i = 0; i < nums.length; i++) {
            while (j < nums.length && nums[j] - nums[i] <= dist) {
                j++;
            }
            cnt += j - i - 1;
        }
        return cnt;
    }
}
