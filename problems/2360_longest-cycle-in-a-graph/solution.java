import java.util.ArrayList;
import java.util.List;

class Solution {

    public int longestCycle(int[] edges) {
        int n = edges.length;
        int[] color = new int[n];
        int[] step = new int[n];
        int timer = 1;
        int best = -1;
        for (int start = 0; start < n; start++) {
            if (color[start] != 0) continue;
            int node = start;
            List<Integer> path = new ArrayList<>();
            while (node != -1 && color[node] == 0) {
                color[node] = 1;
                step[node] = timer;
                timer += 1;
                path.add(node);
                node = edges[node];
            }
            if (node != -1 && color[node] == 1) {
                best = Math.max(best, timer - step[node]);
            }
            for (int v : path) color[v] = 2;
        }
        return best;
    }
}
