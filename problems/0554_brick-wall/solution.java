import java.util.HashMap;
import java.util.Map;

class Solution {

    public int leastBricks(int[][] wall) {
        Map<Integer, Integer> edgeCounts = new HashMap<>();
        for (int[] row : wall) {
            int position = 0;
            for (int i = 0; i < row.length - 1; i++) {
                position += row[i];
                edgeCounts.merge(position, 1, Integer::sum);
            }
        }
        int bestEdges = 0;
        for (int count : edgeCounts.values()) {
            bestEdges = Math.max(bestEdges, count);
        }
        return wall.length - bestEdges;
    }
}
