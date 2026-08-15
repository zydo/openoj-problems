import java.util.Arrays;

class Solution {

    public int[] successfulPairs(int[] spells, int[] potions, long success) {
        Arrays.sort(potions);
        int n = spells.length;
        int m = potions.length;
        int[] res = new int[n];
        for (int i = 0; i < n; i++) {
            long need = (success + spells[i] - 1) / spells[i];
            // first index with potions[idx] >= need
            int lo = 0,
                hi = m;
            while (lo < hi) {
                int mid = (lo + hi) >>> 1;
                if (potions[mid] >= need) hi = mid;
                else lo = mid + 1;
            }
            res[i] = m - lo;
        }
        return res;
    }
}
