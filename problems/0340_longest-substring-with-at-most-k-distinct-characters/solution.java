import java.util.HashMap;
import java.util.Map;

class Solution {

    public int lengthOfLongestSubstringKDistinct(String s, int k) {
        Map<Character, Integer> counts = new HashMap<>();
        int left = 0;
        int best = 0;
        for (int right = 0; right < s.length(); ++right) {
            char ch = s.charAt(right);
            counts.merge(ch, 1, Integer::sum);
            while (counts.size() > k) {
                char c = s.charAt(left);
                int cnt = counts.get(c) - 1;
                if (cnt == 0) {
                    counts.remove(c);
                } else {
                    counts.put(c, cnt);
                }
                ++left;
            }
            if (right - left + 1 > best) {
                best = right - left + 1;
            }
        }
        return best;
    }
}
