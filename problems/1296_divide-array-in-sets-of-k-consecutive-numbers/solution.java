import java.util.TreeMap;

class Solution {

    public boolean isPossibleDivide(int[] nums, int k) {
        if (nums.length % k != 0) return false;
        TreeMap<Integer, Integer> counts = new TreeMap<>();
        for (int x : nums) {
            counts.merge(x, 1, Integer::sum);
        }
        for (int value : counts.keySet()) {
            int need = counts.get(value);
            if (need <= 0) continue;
            for (int i = value; i < value + k; i++) {
                int have = counts.getOrDefault(i, 0);
                if (have < need) return false;
                counts.put(i, have - need);
            }
        }
        return true;
    }
}
