import java.util.*;

class Solution {

    public int maxEqualRowsAfterFlips(int[][] matrix) {
        Map<String, Integer> counts = new HashMap<>();
        int best = 0;
        for (int[] row : matrix) {
            StringBuilder sb = new StringBuilder();
            for (int value : row) {
                sb.append(value ^ row[0]);
            }
            String key = sb.toString();
            int next = counts.getOrDefault(key, 0) + 1;
            counts.put(key, next);
            best = Math.max(best, next);
        }
        return best;
    }
}
