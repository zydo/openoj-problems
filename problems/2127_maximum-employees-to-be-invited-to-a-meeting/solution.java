import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

class Solution {

    public int maximumInvitations(int[] favorite) {
        int n = favorite.length;
        int[] indeg = new int[n];
        for (int f : favorite) {
            indeg[f]++;
        }

        int[] depth = new int[n];
        java.util.Arrays.fill(depth, 1);
        Deque<Integer> queue = new ArrayDeque<>();
        for (int i = 0; i < n; i++) {
            if (indeg[i] == 0) {
                queue.add(i);
            }
        }
        while (!queue.isEmpty()) {
            int u = queue.poll();
            int v = favorite[u];
            if (depth[u] + 1 > depth[v]) {
                depth[v] = depth[u] + 1;
            }
            if (--indeg[v] == 0) {
                queue.add(v);
            }
        }

        int maxCycle = 0;
        int pairSum = 0;
        boolean[] visited = new boolean[n];
        for (int i = 0; i < n; i++) {
            if (indeg[i] > 0 && !visited[i]) {
                int cycleLen = 0;
                int cur = i;
                while (!visited[cur]) {
                    visited[cur] = true;
                    cycleLen++;
                    cur = favorite[cur];
                }
                if (cycleLen == 2) {
                    pairSum += depth[i] + depth[favorite[i]];
                } else if (cycleLen > maxCycle) {
                    maxCycle = cycleLen;
                }
            }
        }
        return Math.max(maxCycle, pairSum);
    }
}
