import java.util.HashMap;
import java.util.Map;

class Solution {

    public int longestSubsequence(int[] arr, int difference) {
        Map<Integer, Integer> dp = new HashMap<>();
        int best = 0;
        for (int x : arr) {
            int len = dp.getOrDefault(x - difference, 0) + 1;
            dp.put(x, len);
            if (len > best) best = len;
        }
        return best;
    }
}
