import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {

    private int timerVal;
    private int[] disc;
    private int[] low;
    private List<List<Integer>> graph;
    private List<int[]> bridges;

    public int[][] criticalConnections(int n, int[][] connections) {
        graph = new ArrayList<>();
        for (int i = 0; i < n; i++) graph.add(new ArrayList<>());
        for (int[] e : connections) {
            graph.get(e[0]).add(e[1]);
            graph.get(e[1]).add(e[0]);
        }
        disc = new int[n];
        low = new int[n];
        Arrays.fill(disc, -1);
        timerVal = 0;
        bridges = new ArrayList<>();
        dfs(0, -1);
        bridges.sort((x, y) ->
            x[0] != y[0]
                ? Integer.compare(x[0], y[0])
                : Integer.compare(x[1], y[1])
        );
        int[][] res = new int[bridges.size()][2];
        for (int i = 0; i < bridges.size(); i++) {
            res[i][0] = bridges.get(i)[0];
            res[i][1] = bridges.get(i)[1];
        }
        return res;
    }

    private void dfs(int u, int parent) {
        disc[u] = low[u] = timerVal++;
        for (int v : graph.get(u)) {
            if (disc[v] == -1) {
                dfs(v, u);
                low[u] = Math.min(low[u], low[v]);
                if (low[v] > disc[u]) {
                    bridges.add(new int[] { Math.min(u, v), Math.max(u, v) });
                }
            } else if (v != parent) {
                low[u] = Math.min(low[u], disc[v]);
            }
        }
    }
}
