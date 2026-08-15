import java.util.HashSet;
import java.util.Set;

class Solution {

    public int countDistinct(int[] nums, int k, int p) {
        Set<String> seen = new HashSet<>();
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            int divisible = 0;
            StringBuilder cur = new StringBuilder();
            for (int j = i; j < n; j++) {
                if (nums[j] % p == 0) divisible += 1;
                if (cur.length() > 0) cur.append(',');
                cur.append(nums[j]);
                if (divisible > k) break;
                seen.add(cur.toString());
            }
        }
        return seen.size();
    }
}
