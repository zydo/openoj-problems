import java.util.HashMap;
import java.util.Map;

class Solution {

    public long maximumSum(int[] nums) {
        Map<Integer, Long> groups = new HashMap<>();
        for (int i = 1; i <= nums.length; i++) {
            int key = squarefreePart(i);
            groups.merge(key, (long) nums[i - 1], Long::sum);
        }
        long best = Long.MIN_VALUE;
        for (long v : groups.values()) {
            if (v > best) best = v;
        }
        return best;
    }

    private int squarefreePart(int x) {
        int result = 1;
        int d = 2;
        while ((long) d * d <= x) {
            if (x % d == 0) {
                int count = 0;
                while (x % d == 0) {
                    x /= d;
                    count++;
                }
                if (count % 2 == 1) result *= d;
            }
            d++;
        }
        if (x > 1) result *= x;
        return result;
    }
}
