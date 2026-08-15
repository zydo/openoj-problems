class Solution {

    public long countPairs(int n, int[][] edges) {
        int[] parent = new int[n];
        int[] size = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i;
            size[i] = 1;
        }

        for (int[] e : edges) {
            int ra = find(parent, e[0]);
            int rb = find(parent, e[1]);
            if (ra != rb) {
                if (size[ra] < size[rb]) {
                    int tmp = ra;
                    ra = rb;
                    rb = tmp;
                }
                parent[rb] = ra;
                size[ra] += size[rb];
            }
        }

        long reachable = 0;
        for (int v = 0; v < n; v++) {
            if (find(parent, v) == v) {
                reachable += ((long) size[v] * (size[v] - 1)) / 2;
            }
        }
        return ((long) n * (n - 1)) / 2 - reachable;
    }

    private int find(int[] parent, int x) {
        int root = x;
        while (parent[root] != root) {
            root = parent[root];
        }
        while (parent[x] != root) {
            int next = parent[x];
            parent[x] = root;
            x = next;
        }
        return root;
    }
}
