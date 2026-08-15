import java.util.Arrays;

class Solution {

    public long putMarbles(int[] weights, int k) {
        if (k == 1) {
            return 0;
        }
        int n = weights.length;
        long[] adj = new long[n - 1];
        for (int i = 0; i + 1 < n; i++) {
            adj[i] = (long) weights[i] + weights[i + 1];
        }
        Arrays.sort(adj);
        int m = k - 1;
        long ans = 0;
        for (int i = 0; i < m; i++) {
            ans += adj[n - 2 - i] - adj[i];
        }
        return ans;
    }
}
