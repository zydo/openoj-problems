import java.util.HashMap;
import java.util.Map;

class Solution {

    public long maxSubarraySum(int[] nums) {
        int n = nums.length;
        if (n == 1) return nums[0];
        // prefixMap keyed by the deleted value; key 0L tracks min prefix sum.
        Map<Long, Long> prefixMap = new HashMap<>();
        prefixMap.put(0L, 0L);
        long prefixSum = 0;
        long minPrefix = 0;
        long result = nums[0];
        for (int num : nums) {
            prefixSum += num;
            if (prefixSum - minPrefix > result) result = prefixSum - minPrefix;
            if (num < 0) {
                long p0 = prefixMap.get(0L);
                long val;
                Long prev = prefixMap.get((long) num);
                if (prev != null) {
                    val = Math.min(p0, prev) + num;
                } else {
                    val = p0 + num;
                }
                prefixMap.put((long) num, val);
                if (val < minPrefix) minPrefix = val;
            }
            if (prefixSum < prefixMap.get(0L)) prefixMap.put(0L, prefixSum);
            if (prefixMap.get(0L) < minPrefix) minPrefix = prefixMap.get(0L);
        }
        return result;
    }
}
