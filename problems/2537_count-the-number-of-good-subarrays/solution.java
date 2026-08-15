import java.util.HashMap;
import java.util.Map;

class Solution {

    public long countGood(int[] nums, int k) {
        Map<Integer, Integer> count = new HashMap<>();
        long pairs = 0;
        long ans = 0;
        int left = 0;
        int n = nums.length;
        for (int right = 0; right < n; right++) {
            int x = nums[right];
            int c = count.getOrDefault(x, 0);
            pairs += c;
            count.put(x, c + 1);
            while (pairs >= k) {
                ans += n - right;
                int y = nums[left];
                int cy = count.get(y);
                count.put(y, cy - 1);
                pairs -= cy - 1;
                left++;
            }
        }
        return ans;
    }
}
