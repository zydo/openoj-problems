import java.util.HashSet;
import java.util.Set;

class Solution {

    public int longestRepeatingSubstring(String s) {
        int n = s.length();
        int lo = 0;
        int hi = n - 1;
        while (lo < hi) {
            int mid = lo + (hi - lo + 1) / 2;
            if (hasRepeat(s, mid)) {
                lo = mid;
            } else {
                hi = mid - 1;
            }
        }
        return lo;
    }

    private boolean hasRepeat(String s, int length) {
        if (length == 0) {
            return true;
        }
        Set<String> seen = new HashSet<>();
        for (int i = 0; i + length <= s.length(); i++) {
            String piece = s.substring(i, i + length);
            if (!seen.add(piece)) {
                return true;
            }
        }
        return false;
    }
}
