import java.util.*;

class Solution {

    private List<List<Integer>> adj;
    private int[] codes;
    private byte[] memo;
    private int n;

    public int maxLen(int n, int[][] edges, String label) {
        this.n = n;
        adj = new ArrayList<>();
        for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
        for (int[] e : edges) {
            adj.get(e[0]).add(e[1]);
            adj.get(e[1]).add(e[0]);
        }
        codes = new int[n];
        for (int i = 0; i < n; i++) codes[i] = label.charAt(i);
        memo = new byte[(1 << n) * n * n];
        Arrays.fill(memo, (byte) -1);

        int answer = 1;
        for (int i = 0; i < n; i++) {
            int length = dp(1 << i, i, i);
            if (length > answer) answer = length;
        }
        for (int[] e : edges) {
            int u = e[0],
                v = e[1];
            if (codes[u] == codes[v]) {
                int length = dp((1 << u) | (1 << v), u, v);
                if (length > answer) answer = length;
            }
        }
        return answer;
    }

    private int dp(int mask, int left, int right) {
        int idx = (mask * n + left) * n + right;
        if (memo[idx] != -1) return memo[idx];
        int best = Integer.bitCount(mask);
        for (int u : adj.get(left)) {
            if (((mask >> u) & 1) != 0) continue;
            for (int v : adj.get(right)) {
                if (u == v || ((mask >> v) & 1) != 0) continue;
                if (codes[u] != codes[v]) continue;
                int cand = dp(mask | (1 << u) | (1 << v), u, v);
                if (cand > best) best = cand;
            }
        }
        memo[idx] = (byte) best;
        return best;
    }
}
