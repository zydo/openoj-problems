import java.util.HashSet;
import java.util.Set;

class Solution {

    public int longestValidSubstring(String word, String[] forbidden) {
        Set<String> banned = new HashSet<>();
        for (String s : forbidden) {
            banned.add(s);
        }
        int maxLen = 0;
        for (String s : banned) {
            maxLen = Math.max(maxLen, s.length());
        }
        int n = word.length();
        int left = 0;
        int ans = 0;
        for (int right = 0; right < n; right++) {
            int start = Math.max(right - maxLen, left - 1);
            for (int j = right; j > start; j--) {
                if (banned.contains(word.substring(j, right + 1))) {
                    left = j + 1;
                    break;
                }
            }
            ans = Math.max(ans, right - left + 1);
        }
        return ans;
    }
}
