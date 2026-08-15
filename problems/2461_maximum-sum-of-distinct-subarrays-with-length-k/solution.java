import java.util.HashMap;
import java.util.Map;

class Solution {

    public long maximumSubarraySum(int[] nums, int k) {
        Map<Integer, Integer> counts = new HashMap<>();
        long windowSum = 0;
        long best = 0;
        for (int i = 0; i < nums.length; i++) {
            int value = nums[i];
            counts.merge(value, 1, Integer::sum);
            windowSum += value;
            if (i >= k) {
                int old = nums[i - k];
                int c = counts.get(old) - 1;
                if (c == 0) {
                    counts.remove(old);
                } else {
                    counts.put(old, c);
                }
                windowSum -= old;
            }
            if (i >= k - 1 && counts.size() == k && windowSum > best) {
                best = windowSum;
            }
        }
        return best;
    }
}
