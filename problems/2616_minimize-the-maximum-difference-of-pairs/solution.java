import java.util.Arrays;

class Solution {

    public int minimizeMax(int[] nums, int p) {
        int[] sorted = nums.clone();
        Arrays.sort(sorted);
        int n = sorted.length;
        int lo = 0,
            hi = sorted[n - 1] - sorted[0];
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (can(sorted, mid, p)) hi = mid;
            else lo = mid + 1;
        }
        return lo;
    }

    private boolean can(int[] nums, int diff, int p) {
        int count = 0;
        int i = 1;
        while (i < nums.length) {
            if (nums[i] - nums[i - 1] <= diff) {
                count++;
                i += 2;
            } else {
                i += 1;
            }
        }
        return count >= p;
    }
}
