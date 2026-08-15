import java.util.HashSet;
import java.util.Set;

class Solution {

    public int findMaximumXOR(int[] nums) {
        int best = 0;
        int mask = 0;
        for (int bit = 30; bit >= 0; bit--) {
            mask |= 1 << bit;
            Set<Integer> prefixes = new HashSet<>();
            for (int value : nums) {
                prefixes.add(value & mask);
            }
            int candidate = best | (1 << bit);
            boolean found = false;
            for (int prefix : prefixes) {
                if (prefixes.contains(candidate ^ prefix)) {
                    found = true;
                    break;
                }
            }
            if (found) {
                best = candidate;
            }
        }
        return best;
    }
}
