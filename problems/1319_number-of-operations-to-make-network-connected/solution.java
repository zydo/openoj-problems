class Solution {

    public int makeConnected(int n, int[][] connections) {
        if (connections.length < n - 1) {
            return -1;
        }
        int[] parent = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
        int components = n;
        for (int[] c : connections) {
            int ra = find(parent, c[0]);
            int rb = find(parent, c[1]);
            if (ra != rb) {
                parent[ra] = rb;
                components--;
            }
        }
        return components - 1;
    }

    private int find(int[] parent, int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }
}
