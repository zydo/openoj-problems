import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

class Solution {

    public int[] eventualSafeNodes(int[][] graph) {
        int n = graph.length;
        int[] outdeg = new int[n];
        List<List<Integer>> radj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            radj.add(new ArrayList<>());
        }
        for (int u = 0; u < n; u++) {
            outdeg[u] = graph[u].length;
            for (int v : graph[u]) {
                radj.get(v).add(u);
            }
        }
        Deque<Integer> queue = new ArrayDeque<>();
        for (int i = 0; i < n; i++) {
            if (outdeg[i] == 0) {
                queue.add(i);
            }
        }
        boolean[] safe = new boolean[n];
        while (!queue.isEmpty()) {
            int u = queue.poll();
            safe[u] = true;
            for (int v : radj.get(u)) {
                outdeg[v]--;
                if (outdeg[v] == 0) {
                    queue.add(v);
                }
            }
        }
        int count = 0;
        for (int i = 0; i < n; i++) {
            if (safe[i]) {
                count++;
            }
        }
        int[] result = new int[count];
        int idx = 0;
        for (int i = 0; i < n; i++) {
            if (safe[i]) {
                result[idx++] = i;
            }
        }
        return result;
    }
}
