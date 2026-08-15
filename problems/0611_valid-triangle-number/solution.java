import java.util.Arrays;

class Solution {

    public int triangleNumber(int[] nums) {
        int[] sorted = nums.clone();
        Arrays.sort(sorted);
        int n = sorted.length;
        int count = 0;
        for (int i = n - 1; i > 1; i--) {
            if (sorted[i] == 0) break;
            int lo = 0,
                hi = i - 1;
            while (lo < hi) {
                if (sorted[lo] + sorted[hi] > sorted[i]) {
                    count += hi - lo;
                    hi--;
                } else {
                    lo++;
                }
            }
        }
        return count;
    }
}
