import java.util.TreeMap;

class Solution {

    public boolean isNStraightHand(int[] hand, int groupSize) {
        if (hand.length % groupSize != 0) {
            return false;
        }
        TreeMap<Integer, Integer> counts = new TreeMap<>();
        for (int v : hand) {
            counts.merge(v, 1, Integer::sum);
        }
        while (!counts.isEmpty()) {
            int value = counts.firstKey();
            int need = counts.get(value);
            for (int nv = value; nv < value + groupSize; nv++) {
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
