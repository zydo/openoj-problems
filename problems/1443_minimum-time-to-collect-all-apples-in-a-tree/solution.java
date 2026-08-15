import java.util.ArrayList;
import java.util.List;

class Solution {

    public int minTime(int n, int[][] edges, boolean[] hasApple) {
        List<List<Integer>> adjacency = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adjacency.add(new ArrayList<>());
        }
        for (int[] edge : edges) {
            adjacency.get(edge[0]).add(edge[1]);
            adjacency.get(edge[1]).add(edge[0]);
        }

        int[] parent = new int[n];
        java.util.Arrays.fill(parent, -1);
        int[] order = new int[n];
        int orderSize = 0;
        boolean[] seen = new boolean[n];
        seen[0] = true;
        int[] stack = new int[n];
        int stackSize = 0;
        stack[stackSize++] = 0;
        while (stackSize > 0) {
            int u = stack[--stackSize];
            order[orderSize++] = u;
            for (int v : adjacency.get(u)) {
                if (!seen[v]) {
                    seen[v] = true;
                    parent[v] = u;
                    stack[stackSize++] = v;
                }
            }
        }

        boolean[] has = new boolean[n];
        for (int i = 0; i < n; i++) {
            has[i] = hasApple[i];
        }
        int time = 0;
        for (int i = orderSize - 1; i >= 0; i--) {
            int u = order[i];
            if (u == 0) {
                continue;
            }
            if (has[u]) {
                time += 2;
                has[parent[u]] = true;
            }
        }
        return time;
    }
}
