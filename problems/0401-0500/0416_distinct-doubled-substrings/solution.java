import java.util.HashSet;
import java.util.Set;

class Solution {

    public int distinctDoubledSubstrings(String text) {
        int n = text.length();
        // A doubled substring is exactly an even-length substring whose two halves are
        // identical, so each one is characterized by a half length and a
        // start index — enumerate every such (half, i) pair.
        Set<String> seen = new HashSet<>();
        for (int half = 1; half <= n / 2; half++) {
            // Start positions with room for the full doubled substring.
            for (int i = 0; i + 2 * half <= n; i++) {
                // Direct half comparison: nothing else can pass it, and every
                // doubled substring appears for exactly its own (half, i).
                if (text.regionMatches(i, text, i + half, half)) {
                    // The set silently discards repeats — equal substrings
                    // hash/compare identically — so its size is the answer.
                    seen.add(text.substring(i, i + 2 * half));
                }
            }
        }
        return seen.size();
    }
}
