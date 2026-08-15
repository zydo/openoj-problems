import java.util.Arrays;

class Solution {

    public int minimumCost(int n, int[][] connections) {
        int[][] conns = connections.clone();
        Arrays.sort(conns, (a, b) -> Integer.compare(a[2], b[2]));
        int[] parent = new int[n + 1];
        for (int i = 0; i <= n; i++) {
            parent[i] = i;
        }
        int total = 0;
        int components = n;
        for (int[] c : conns) {
            int rx = find(parent, c[0]);
            int ry = find(parent, c[1]);
            if (rx != ry) {
                parent[rx] = ry;
                total += c[2];
                components--;
                if (components == 1) {
                    return total;
                }
            }
        }
        return -1;
    }

    private int find(int[] parent, int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }
}
