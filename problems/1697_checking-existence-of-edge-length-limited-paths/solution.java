import java.util.Arrays;
import java.util.Comparator;

class Solution {

    public boolean[] distanceLimitedPathsExist(
        int n,
        int[][] edgeList,
        int[][] queries
    ) {
        int[] parent = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
        int[][] edges = edgeList.clone();
        Arrays.sort(edges, Comparator.comparingInt(e -> e[2]));
        Integer[] order = new Integer[queries.length];
        for (int i = 0; i < order.length; i++) {
            order[i] = i;
        }
        Arrays.sort(order, Comparator.comparingInt(i -> queries[i][2]));
        boolean[] answer = new boolean[queries.length];
        int ei = 0;
        for (int qi : order) {
            int p = queries[qi][0];
            int q = queries[qi][1];
            int limit = queries[qi][2];
            while (ei < edges.length && edges[ei][2] < limit) {
                int ra = find(parent, edges[ei][0]);
                int rb = find(parent, edges[ei][1]);
                if (ra != rb) {
                    parent[ra] = rb;
                }
                ei++;
            }
            answer[qi] = find(parent, p) == find(parent, q);
        }
        return answer;
    }

    private int find(int[] parent, int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }
}
