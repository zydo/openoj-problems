import java.util.HashMap;
import java.util.Map;

class Solution {

    public int[] minimumCost(int n, int[][] edges, int[][] query) {
        int[] parent = new int[n];
        int[] size = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i;
            size[i] = 1;
        }

        for (int[] e : edges) {
            union(parent, size, e[0], e[1]);
        }

        Map<Integer, Integer> compAnd = new HashMap<>();
        for (int[] e : edges) {
            int r = find(parent, e[0]);
            compAnd.merge(r, e[2], (a, b) -> a & b);
        }

        int[] ans = new int[query.length];
        for (int i = 0; i < query.length; i++) {
            int rs = find(parent, query[i][0]);
            int rt = find(parent, query[i][1]);
            if (rs != rt) {
                ans[i] = -1;
            } else {
                ans[i] = compAnd.get(rs);
            }
        }
        return ans;
    }

    private int find(int[] parent, int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    private void union(int[] parent, int[] size, int a, int b) {
        int ra = find(parent, a);
        int rb = find(parent, b);
        if (ra == rb) {
            return;
        }
        if (size[ra] < size[rb]) {
            int tmp = ra;
            ra = rb;
            rb = tmp;
        }
        parent[rb] = ra;
        size[ra] += size[rb];
    }
}
