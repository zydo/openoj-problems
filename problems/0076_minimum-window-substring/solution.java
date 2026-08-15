import java.util.HashMap;
import java.util.Map;

class Solution {

    public String minWindow(String s, String t) {
        if (t.isEmpty() || t.length() > s.length()) return "";
        Map<Character, Integer> need = new HashMap<>();
        for (char ch : t.toCharArray()) {
            need.merge(ch, 1, Integer::sum);
        }
        int missing = t.length();
        int bestStart = 0,
            bestLen = Integer.MAX_VALUE;
        int left = 0;
        for (int right = 0; right < s.length(); right++) {
            char ch = s.charAt(right);
            if (need.getOrDefault(ch, 0) > 0) missing--;
            need.merge(ch, -1, Integer::sum);
            if (missing == 0) {
                while (left < right && need.get(s.charAt(left)) < 0) {
                    need.merge(s.charAt(left), 1, Integer::sum);
                    left++;
                }
                if (right - left + 1 < bestLen) {
                    bestStart = left;
                    bestLen = right - left + 1;
                }
                need.merge(s.charAt(left), 1, Integer::sum);
                missing++;
                left++;
            }
        }
        return bestLen == Integer.MAX_VALUE
            ? ""
            : s.substring(bestStart, bestStart + bestLen);
    }
}
