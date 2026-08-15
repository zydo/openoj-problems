import java.util.HashMap;
import java.util.Map;

class Solution {

    public int medianOfUniquenessArray(int[] nums) {
        int n = nums.length;
        long length = ((long) n * (n + 1)) / 2;
        long targetRank = (length + 1) / 2;
        int lo = 1,
            hi = n;
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (countAtMost(nums, mid) >= targetRank) hi = mid;
            else lo = mid + 1;
        }
        return lo;
    }

    private long countAtMost(int[] nums, int x) {
        Map<Integer, Integer> freq = new HashMap<>();
        int left = 0;
        long result = 0;
        for (int right = 0; right < nums.length; right++) {
            freq.merge(nums[right], 1, Integer::sum);
            while (freq.size() > x) {
                int out = nums[left++];
                int c = freq.get(out);
                if (c == 1) freq.remove(out);
                else freq.put(out, c - 1);
            }
            result += right - left + 1;
        }
        return result;
    }
}
