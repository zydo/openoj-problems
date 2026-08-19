import java.util.*;

class Solution {

    public int longestOverworkedStretch(int[] hours) {
        // earliest index each prefix value has been seen; {0: -1} lets
        // blocks starting at index 0 be handled uniformly
        Map<Integer, Integer> first = new HashMap<>();
        first.put(0, -1);
        int prefix = 0;
        int best = 0;
        for (int i = 0; i < hours.length; i++) {
            // heavy day scores +1, light day -1: an overworked block is
            // exactly a subarray whose sum is strictly positive
            prefix += hours[i] > 8 ? 1 : -1;
            if (prefix > 0) {
                // the whole prefix hours[0..i] is already overworked
                best = i + 1;
            } else if (first.containsKey(prefix - 1)) {
                // cut just after the earliest prefix-1: the remainder sums to
                // exactly 1, and since steps are unit-sized no longer block
                // can end at i
                best = Math.max(best, i - first.get(prefix - 1));
            }
            if (!first.containsKey(prefix)) {
                // record only the first sighting so stored indices stay leftmost
                first.put(prefix, i);
            }
        }
        return best;
    }
}
