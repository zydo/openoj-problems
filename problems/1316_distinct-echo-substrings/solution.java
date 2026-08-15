import java.util.HashSet;
import java.util.Set;

class Solution {

    public int distinctEchoSubstrings(String text) {
        int n = text.length();
        Set<String> seen = new HashSet<>();
        for (int half = 1; half <= n / 2; half++) {
            for (int i = 0; i + 2 * half <= n; i++) {
                if (text.regionMatches(i, text, i + half, half)) {
                    seen.add(text.substring(i, i + 2 * half));
                }
            }
        }
        return seen.size();
    }
}
