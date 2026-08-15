import java.util.*;

class Solution {

    public int maxChunksToSorted(int[] arr) {
        int[] ordered = arr.clone();
        Arrays.sort(ordered);
        Map<Integer, Integer> counts = new HashMap<>();
        int balance = 0;
        int chunks = 0;
        for (int i = 0; i < arr.length; i++) {
            int a = arr[i],
                b = ordered[i];
            int ca = counts.getOrDefault(a, 0) + 1;
            counts.put(a, ca);
            balance += ca > 0 ? 1 : -1;
            int cb = counts.getOrDefault(b, 0) - 1;
            counts.put(b, cb);
            balance += cb < 0 ? 1 : -1;
            if (balance == 0) chunks++;
        }
        return chunks;
    }
}
