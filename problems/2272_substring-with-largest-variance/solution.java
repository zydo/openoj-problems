import java.util.HashSet;
import java.util.Set;

class Solution {

    public int largestVariance(String s) {
        Set<Character> chars = new HashSet<>();
        for (int k = 0; k < s.length(); k++) {
            chars.add(s.charAt(k));
        }
        int answer = 0;
        for (char high : chars) {
            for (char low : chars) {
                if (high == low) {
                    continue;
                }
                int diff = 0; // max subarray sum ending here (may lack `low`)
                boolean hasLow = false; // whether diffWithLow has been initialized
                int diffWithLow = 0; // same but guaranteed to contain at least one `low`
                for (int k = 0; k < s.length(); k++) {
                    char ch = s.charAt(k);
                    if (ch == high) {
                        diff += 1;
                        if (hasLow) {
                            diffWithLow += 1;
                        }
                    } else if (ch == low) {
                        diff -= 1;
                        if (hasLow) {
                            diffWithLow = Math.max(diffWithLow - 1, diff);
                        } else {
                            diffWithLow = diff;
                            hasLow = true;
                        }
                        diff = Math.max(0, diff);
                    }
                    // else: neither char, both values unchanged
                    if (hasLow && diffWithLow > answer) {
                        answer = diffWithLow;
                    }
                }
            }
        }
        return answer;
    }
}
