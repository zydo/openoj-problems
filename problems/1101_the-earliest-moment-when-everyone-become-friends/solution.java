import java.util.Arrays;
import java.util.Comparator;

class Solution {

    public int earliestAcq(int[][] logs, int n) {
        int[][] sorted = logs.clone();
        Arrays.sort(sorted, Comparator.comparingInt(a -> a[0]));
        int[] parent = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
        int components = n;
        for (int[] log : sorted) {
            int rx = find(parent, log[1]);
            int ry = find(parent, log[2]);
            if (rx != ry) {
                parent[rx] = ry;
                components--;
                if (components == 1) {
                    return log[0];
                }
            }
        }
        return -1;
    }

    private int find(int[] parent, int a) {
        while (parent[a] != a) {
            parent[a] = parent[parent[a]];
            a = parent[a];
        }
        return a;
    }
}
