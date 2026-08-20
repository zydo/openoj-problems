import java.util.TreeMap;

class Solution {

    public boolean arrangeIntoConsecutiveRuns(int[] entries, int runLength) {
        // A divisible entries must be a multiple of runLength long.
        if (entries.length % runLength != 0) {
            return false;
        }
        TreeMap<Integer, Integer> counts = new TreeMap<>();
        for (int v : entries) {
            counts.merge(v, 1, Integer::sum);
        }
        // firstKey is always the smallest remaining value: it must
        // start its groups, since nothing smaller exists to extend
        // downward.
        while (!counts.isEmpty()) {
            int value = counts.firstKey();
            int need = counts.get(value);
            // Each of the next runLength-1 values must supply at
            // least `need` cards; subtracting in bulk keeps this to
            // one pass per starting value. Removing exhausted keys
            // keeps firstKey the smallest value still held.
            for (int nv = value; nv < value + runLength; nv++) {
                int have = counts.getOrDefault(nv, 0);
                if (have < need) {
                    return false;
                }
                if (have == need) {
                    counts.remove(nv);
                } else {
                    counts.put(nv, have - need);
                }
            }
        }
        return true;
    }
}
