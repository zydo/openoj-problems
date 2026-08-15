import java.util.Arrays;
import java.util.Comparator;

class Solution {

    public int minTime(int n, int[][] edges, int k) {
        int[] parent = new int[n];
        for (int i = 0; i < n; i++) parent[i] = i;

        int[][] ordered = edges.clone();
        Arrays.sort(ordered, (a, b) -> Integer.compare(b[2], a[2]));

        int components = n;
        int answer = 0;
        int i = 0;
        int m = ordered.length;
        while (i < m) {
            int t = ordered[i][2];
            if (components >= k) answer = t;
            while (i < m && ordered[i][2] == t) {
                if (union(parent, ordered[i][0], ordered[i][1])) components--;
                i++;
            }
        }
        if (components >= k) answer = 0;
        return answer;
    }

    private int find(int[] parent, int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    private boolean union(int[] parent, int a, int b) {
        int ra = find(parent, a),
            rb = find(parent, b);
        if (ra == rb) return false;
        parent[ra] = rb;
        return true;
    }
}
